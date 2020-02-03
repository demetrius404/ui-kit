import cn from "classnames";
import { useContext, useEffect, useMemo, useState } from "react";
import * as React from "react";
import { FilterWrapperContext } from "../FilterWrapper";
import { withOutsideClick, WithOutsideClickProps } from "../HOCs";
import { IconSvg } from "../IconSvg";
import { LabelButton } from "./components";
import "./FiltrationGroupComponent.scss";
import { CallbackProps, SearchClasses, StateProps } from "./types";

type Props = StateProps & CallbackProps;

type SearchElementType = "first" | "last";

// Менять только высоту, остальные правки делать в стилях!
const MIN_HEIGHT = 32;

const FiltrationGroupComponent: React.FC<Props & WithOutsideClickProps> = ({
	groupType,
	andLabel,
	orLabel,
	shouldShowLabel,
	children,
	onGroupTypeToggle,
	state,
	onConditionRemove,
	setOutsideClickRef,
	shouldShowDuplicateButton,
	onConditionCopy,
	shouldShowButtons,
	addGroupConditionButton,
	addSimpleConditionButton,
	onConditionStateToggle
}) => {
	const [verticalBracket, setVerticalBracket] = useState<boolean>(false);
	const context = useContext(FilterWrapperContext);
	const shouldRerenderBrackets = React.useRef(false);

	const classes = Object.values(SearchClasses);
	const kitFiltrationRef = React.useRef<HTMLUListElement>(null);
	const kitFiltrationCloseRef = React.useRef<HTMLButtonElement>(null);
	const kitFiltrationLabelRef = React.useRef<HTMLDivElement>(null);
	const kitFiltrationLabelLineRef = React.useRef<HTMLDivElement>(null);

	useEffect(() => {
		moveLabelAtCenterOfBracket();
		handleCreateVerticalBrackets();
	});

	useMemo(
		() => {
			if (context) {
				if (shouldRerenderBrackets.current) {
					context.rerenderBrackets();
				} else {
					shouldRerenderBrackets.current = true;
				}
			}
		},
		[children, state, verticalBracket]
	);

	useEffect(() => {
		const labelRef = kitFiltrationLabelRef.current;
		const closeRef = kitFiltrationCloseRef.current;

		if (labelRef) {
			labelRef.addEventListener("mouseover", handleHoverAddClassLabel);
		}

		if (closeRef) {
			closeRef.addEventListener("mouseover", handleHoverAddClassLabel);
		}

		return () => {
			if (labelRef) {
				labelRef.removeEventListener(
					"mouseover",
					handleHoverAddClassLabel
				);
				labelRef.removeEventListener(
					"mouseout",
					handleHoverRemoveClassLabel
				);
			}

			if (closeRef) {
				closeRef.removeEventListener(
					"mouseover",
					handleHoverAddClassLabel
				);
				closeRef.removeEventListener(
					"mouseout",
					handleHoverRemoveClassLabel
				);
			}
		};
	}, []);

	const moveLabelAtCenterOfBracket = () => {
		let heightGroup = 0;
		let heightLine = 0;
		let positionTop = 0;
		const groupRef = kitFiltrationRef.current;
		const labelRef = kitFiltrationLabelRef.current;
		const labelLineRef = kitFiltrationLabelLineRef.current;
		const searchClasses = classes;

		if (groupRef && labelRef && labelLineRef) {
			const firstChildElement: HTMLElement | null = searchFirstLastElement(
				groupRef,
				searchClasses,
				"first"
			);

			const lastChildElement: HTMLElement | null = searchFirstLastElement(
				groupRef,
				searchClasses,
				"last"
			);

			if (firstChildElement) {
				if (
					firstChildElement.classList.contains(
						SearchClasses.KitFiltrationGroup
					)
				) {
					const firstChildElementHeight = firstChildElement.getBoundingClientRect()
						.height;

					const labelLine = firstChildElement.querySelector(
						".kit-filtration-group__label-line"
					) as HTMLDivElement;
					let labelLineMiddle = 0;

					if (labelLine) {
						const { offsetTop, offsetHeight } = labelLine;

						labelLineMiddle = offsetTop + offsetHeight / 2;
					}

					heightLine +=
						firstChildElementHeight / 2 -
						(firstChildElementHeight / 2 - labelLineMiddle);

					positionTop = labelLineMiddle;
				} else if (
					firstChildElement.classList.contains(
						SearchClasses.KitFiltrationCondition
					)
				) {
					heightLine += MIN_HEIGHT / 2;
					positionTop = MIN_HEIGHT / 2;
				} else if (
					firstChildElement.classList.contains(
						SearchClasses.KitFiltrationGroupButtons
					)
				) {
					heightLine += MIN_HEIGHT / 2;
					positionTop = MIN_HEIGHT / 2;
				}
			}

			if (lastChildElement) {
				if (
					lastChildElement.classList.contains(
						SearchClasses.KitFiltrationGroup
					)
				) {
					const lastChildElementHeight = lastChildElement.getBoundingClientRect()
						.height;

					const labelLine = lastChildElement.querySelector(
						".kit-filtration-group__label-line"
					) as HTMLDivElement;

					let withOutLine = 0;
					let labelLineMiddle = 0;

					if (labelLine) {
						const { height } = labelLine.getBoundingClientRect();
						const offsetTop = labelLine.offsetTop;

						withOutLine = lastChildElementHeight - height;
						labelLineMiddle = height / 2 - offsetTop;
					}

					heightLine += withOutLine + labelLineMiddle;
				} else if (
					lastChildElement.classList.contains(
						SearchClasses.KitFiltrationCondition
					)
				) {
					heightGroup +=
						lastChildElement.getBoundingClientRect().height -
						MIN_HEIGHT;

					heightLine +=
						lastChildElement.getBoundingClientRect().height -
						MIN_HEIGHT / 2;
				} else if (
					lastChildElement.classList.contains(
						SearchClasses.KitFiltrationGroupButtons
					)
				) {
					heightLine += MIN_HEIGHT / 2;
				}
			}

			labelRef.style.height = `${groupRef.getBoundingClientRect().height -
				heightGroup}px`;

			if (firstChildElement && lastChildElement) {
				labelLineRef.style.height = `${groupRef.getBoundingClientRect()
					.height - heightLine}px`;
			} else {
				labelLineRef.style.height = "0px";
			}

			if (positionTop !== 0) {
				labelLineRef.style.top = `${positionTop}px`;
			} else {
				labelLineRef.style.top = `${MIN_HEIGHT / 2}px`;
			}
		}
	};

	const searchFirstLastElement = (
		searchableElement: HTMLElement,
		searchClasses: string[],
		search: SearchElementType
	): HTMLElement | null => {
		const childrenElements = Array.from(
			searchableElement.children
		) as HTMLElement[];

		if (search === "last") {
			childrenElements.reverse();
		}

		return (
			childrenElements.find((item: HTMLElement) => {
				return searchClasses.some(className =>
					item.classList.contains(className)
				);
			}) || null
		);
	};

	const handleHoverAddClassLabel = () => {
		const labelRef = kitFiltrationLabelRef.current;
		const closeRef = kitFiltrationCloseRef.current;

		if (labelRef) {
			labelRef.parentElement!.classList.add("kit-filtration-group_hover");

			const parentElements = labelRef.parentElement!.parentElement!
				.children;

			Array.from(parentElements).forEach(item => {
				if (
					item.classList.contains(
						"kit-filtration-condition__item-text"
					)
				) {
					item.classList.add(
						"kit-filtration-condition__item-text_hover"
					);
				}
			});

			if (closeRef) {
				closeRef.addEventListener(
					"mouseout",
					handleHoverRemoveClassLabel
				);
			}

			labelRef.addEventListener("mouseout", handleHoverRemoveClassLabel);
		}
	};

	const handleHoverRemoveClassLabel = () => {
		const labelRef = kitFiltrationLabelRef.current;
		const closeRef = kitFiltrationCloseRef.current;

		if (labelRef) {
			labelRef.parentElement!.classList.remove(
				"kit-filtration-group_hover"
			);

			const parentElements = labelRef.parentElement!.parentElement!
				.children;

			Array.from(parentElements).forEach(item => {
				if (
					item.classList.contains(
						"kit-filtration-condition__item-text"
					)
				) {
					item.classList.remove(
						"kit-filtration-condition__item-text_hover"
					);
				}
			});

			if (closeRef) {
				closeRef.removeEventListener(
					"mouseout",
					handleHoverRemoveClassLabel
				);
			}

			labelRef.removeEventListener(
				"mouseout",
				handleHoverRemoveClassLabel
			);
		}
	};

	const handleCreateVerticalBrackets = () => {
		let isVerticalBracket = false;

		if (kitFiltrationRef && kitFiltrationRef.current) {
			const ref = kitFiltrationRef.current;
			const parentNode = ref.parentNode as HTMLElement;

			if (parentNode.classList.contains("kit-filtration-condition")) {
				isVerticalBracket = true;
			}
		}

		if (isVerticalBracket !== verticalBracket) {
			setVerticalBracket(newVerticalBracket => !newVerticalBracket);
		}
	};

	const renderCopyButton = () => {
		if (!shouldShowDuplicateButton) {
			return null;
		}
		return (
			<button
				key="copy"
				onClick={onConditionCopy}
				className="kit-filtration-group__copy"
				type="button"
			>
				<IconSvg type="duplicate" />
			</button>
		);
	};

	const verticalBrackets = () => (
		<>
			{verticalBracket && (
				<span className="kit-filtration-group__label-vertical-bracket" />
			)}
		</>
	);

	const renderGroupButtons = (noChildren?: boolean) =>
		shouldShowButtons && (
			<div
				className={cn("kit-filtration-group__buttons", {
					"kit-filtration-group__buttons_no-children": noChildren
				})}
			>
				{addSimpleConditionButton}
				{addGroupConditionButton}
			</div>
		);

	const renderInnerComponents = () => {
		if (state === "view" || state === "shaded" || state === "readOnly") {
			if (React.Children.count(children) === 0) {
				if (!shouldShowLabel) {
					return renderGroupButtons(true);
				} else {
					return null;
				}
			}

			return (
				<>
					{children}
					{renderGroupButtons()}
				</>
			);
		}

		return (
			<>
				<button
					ref={kitFiltrationCloseRef}
					key="toggle"
					onClick={onConditionStateToggle}
					type="button"
					className="kit-filtration-group__close"
				>
					<IconSvg type="close" />
				</button>
				{children}
				{renderGroupButtons()}
			</>
		);
	};

	const handleGroupLabelClick = () => {
		if (state === "edit") {
			return;
		}

		onConditionStateToggle();
	};

	const labelMap = {
		and: andLabel,
		or: orLabel
	};

	const renderInner = renderInnerComponents();
	const renderVerticalBracket = verticalBrackets();

	const anyChildren = React.Children.toArray(children).length > 0;

	if (setOutsideClickRef) {
		setOutsideClickRef(kitFiltrationRef.current as HTMLElement);
	}

	return (
		<ul
			ref={kitFiltrationRef}
			className={cn("kit-filtration-group", {
				"kit-filtration-group_edit": state === "edit",
				"kit-filtration-group_shaded": state === "shaded",
				"kit-filtration-group_read-only": state === "readOnly",
				"kit-filtration-group_not-children": !anyChildren,
				"kit-filtration-group_no-label": !shouldShowLabel
			})}
		>
			<div
				ref={kitFiltrationLabelRef}
				className={cn(
					"kit-filtration-group__label",
					`kit-filtration-group__label_hover_${groupType}`,
					{
						[`kit-filtration-group__label_${groupType}`]: shouldShowLabel
					}
				)}
				onClick={handleGroupLabelClick}
			>
				<div
					ref={kitFiltrationLabelLineRef}
					className="kit-filtration-group__label-line"
				>
					{shouldShowLabel && (
						<span className="kit-filtration-group__label-text">
							{state === "edit" ? (
								<div
									className={cn(
										"kit-filtration-group__label-text-buttons",
										`kit-filtration-group__label-text-buttons_${groupType}`
									)}
								>
									{renderCopyButton()}
									<button
										key="remove"
										onClick={onConditionRemove}
										className="kit-filtration-group__remove"
										type="button"
									>
										<IconSvg type="trash" />
									</button>
									<LabelButton
										onToggle={onGroupTypeToggle}
										types={labelMap}
										activeType={groupType}
									/>
								</div>
							) : (
								labelMap[groupType]
							)}
						</span>
					)}
				</div>
				{renderVerticalBracket}
			</div>
			{renderInner}
		</ul>
	);
};

const FiltrationGroupComponentWithOutsideClick = withOutsideClick(
	FiltrationGroupComponent,
	p => p.state === "edit"
);

export { FiltrationGroupComponentWithOutsideClick as FiltrationGroupComponent };
