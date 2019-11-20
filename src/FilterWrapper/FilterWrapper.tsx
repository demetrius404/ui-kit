import cn from "classnames";
import * as React from "react";
import { IconSvg } from "../IconSvg";
import { FilterActionsPopover, InfoWrapper } from "./components";
import { CallbackProps, SelectionStateType, StateProps } from "./types";

import "./FilterWrapper.scss";
import { FilterWrapperContext } from "./FilterWrapperContext";

type Props = StateProps & CallbackProps;

// export class FilterWrapper extends React.Component<Props> {
// 	public countSelectedItems = () => {
// 		const {
// 			selectionState,
// 			selectedText,
// 			selectedCountDescription,
// 			onCancelSelection,
// 			selectedCancelText
// 		} = this.props;

// 		return (
// 			<div
// 				className={cn(
// 					"kit-filter__count-block",
// 					`kit-filter__count-block_${selectionState}`
// 				)}
// 			>
// 				<span className="kit-filter__count-block-text">
// 					{selectedText}: <b>{selectedCountDescription}</b>
// 				</span>
// 				<button
// 					className="kit-filter__clear-filter-btn"
// 					onClick={onCancelSelection}
// 				>
// 					<IconSvg type="close" />
// 					{selectedCancelText}
// 				</button>
// 			</div>
// 		);
// 	};

// 	public render() {
// 		const {
// 			children,
// 			statisticsValue,
// 			statisticsDescription,
// 			applyButtonCaption,
// 			clearButtonCaption,
// 			doesContainFilter,
// 			onApply,
// 			onClear,
// 			selectionState,
// 			isDataOutdated,
// 			filterActionItems,
// 			filterActionsCaption,
// 			scrollState
// 		} = this.props;

// 		return (
// 			<div
// 				className={cn("kit-filter", {
// 					"kit-filter_short": !doesContainFilter,
// 					"kit-filter_with-filter-action": filterActionItems && filterActionItems.length
// 				})}
// 			>
// 				<div className="kit-filter__top-filter">
// 					<FilterActionsPopover
// 						filterActionsCaption={filterActionsCaption}
// 						filterActionItems={filterActionItems}
// 					/>
// 				</div>
// 				<ul className="kit-filter__all-wrap">{children}</ul>
// 				{doesContainFilter ? (
// 					<div className="kit-filter__wrap">
// 						<div className="kit-filter__wrap-filter">
// 							{scrollState !== "minfied" && (
// 								<button
// 									className="kit-filter__use-filter"
// 									onClick={onApply}
// 								>
// 									{applyButtonCaption}
// 								</button>
// 							)}
// 						</div>
// 						{selectionState !== SelectionStateType.None &&
// 							this.countSelectedItems()}
// 						<InfoWrapper
// 							isWarning={isDataOutdated}
// 							statisticsValue={statisticsValue}
// 							statisticsDescription={statisticsDescription}
// 						>
// 							<button
// 								className="kit-filter__clear-filter-btn"
// 								onClick={onClear}
// 							>
// 								<IconSvg type="close" />
// 								{clearButtonCaption}
// 							</button>
// 						</InfoWrapper>
// 					</div>
// 				) : (
// 						<div className="kit-filter__short-wrap-filter">
// 							{selectionState !== SelectionStateType.None &&
// 								this.countSelectedItems()}
// 							<InfoWrapper
// 								statisticsValue={statisticsValue}
// 								statisticsDescription={statisticsDescription}
// 							/>
// 						</div>
// 					)}
// 			</div>
// 		);
// 	}
// }

export const FilterWrapper: React.FC<Props> = ({
	selectionState,
	selectedText,
	selectedCountDescription,
	onCancelSelection,
	selectedCancelText,
	children,
	statisticsValue,
	statisticsDescription,
	applyButtonCaption,
	clearButtonCaption,
	doesContainFilter,
	onApply,
	onClear,
	isDataOutdated,
	filterActionItems,
	filterActionsCaption,
	scrollState
}) => {
	const refFilterWrapper = React.createRef<HTMLDivElement>();
	const refBreakPoint = React.createRef<HTMLDivElement>();

	const countSelectedItems = () => {
		return (
			<div
				className={cn(
					"kit-filter__count-block",
					`kit-filter__count-block_${selectionState}`
				)}
			>
				<span className="kit-filter__count-block-text">
					{selectedText}: <b>{selectedCountDescription}</b>
				</span>
				<button
					className="kit-filter__clear-filter-btn"
					onClick={onCancelSelection}
				>
					<IconSvg type="close" />
					{selectedCancelText}
				</button>
			</div>
		);
	};

	return (
		<>
			<div ref={refBreakPoint} className="kit-filter__breackpoint" />
			<FilterWrapperContext.Provider value={refBreakPoint.current}>
				<div
					ref={refFilterWrapper}
					className={cn("kit-filter", {
						"kit-filter_short": !doesContainFilter,
						"kit-filter_with-filter-action": filterActionItems && filterActionItems.length
					})}
				>
					<div className="kit-filter__top-filter">
						<FilterActionsPopover
							filterActionsCaption={filterActionsCaption}
							filterActionItems={filterActionItems}
						/>
					</div>
					<ul className="kit-filter__all-wrap">{children}</ul>
					{doesContainFilter ? (
						<div className="kit-filter__wrap">
							<div className="kit-filter__wrap-filter">
								{scrollState !== "minfied" && (
									<button
										className="kit-filter__use-filter"
										onClick={onApply}
									>
										{applyButtonCaption}
									</button>
								)}
							</div>
							{selectionState !== SelectionStateType.None &&
								countSelectedItems()}
							<InfoWrapper
								isWarning={isDataOutdated}
								statisticsValue={statisticsValue}
								statisticsDescription={statisticsDescription}
							>
								<button
									className="kit-filter__clear-filter-btn"
									onClick={onClear}
								>
									<IconSvg type="close" />
									{clearButtonCaption}
								</button>
							</InfoWrapper>
						</div>
					) : (
							<div className="kit-filter__short-wrap-filter">
								{selectionState !== SelectionStateType.None &&
									countSelectedItems()}
								<InfoWrapper
									statisticsValue={statisticsValue}
									statisticsDescription={statisticsDescription}
								/>
							</div>
						)}
				</div>
			</FilterWrapperContext.Provider>
		</>
	);
};