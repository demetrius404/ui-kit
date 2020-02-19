import * as cn from "classnames";
import * as React from "react";
import {
	DateRangeValue,
	DateRangeValueTypes,
	IDateRange,
	IDateRangeCaption,
	LastPeriods
} from "./types";

import { ConditionEditorPopup } from "../ConditionEditorPopup";
import { FilterDetails } from "../FilterDetails";
import { RadioButton } from "../RadioButton";
import { MONTH_IN_DAYS, WEEK_IN_DAYS, YEAR_IN_DAYS } from "../utils/constants";
import { changeDateToBeginOfTheDay, changeDateToEndOfTheDay, getDaysBeforeNow, getNow, parseDateToString } from "../utils/helpers";
import { InnerEditorComponent } from "./components/InnerEditorComponent";

import { withOutsideClick } from "../HOCs";

import { EMPTY_SPACES } from "./constants";
import "./DateRange.scss";

const WithOutsideClickFilterDetails = withOutsideClick(FilterDetails);

interface IProps {
	caption: IDateRangeCaption;
	value: DateRangeValue;
	className?: string;
	onChange: (value: DateRangeValue) => void;
}

const DateRange = ({ onChange, caption, value, className }: IProps) => {
	const {
		labelNoFilter,
		radioTextNoFilter,
		labelConcrete,
		radioConcreteFromText,
		radioConcreteToText,
		labelLast,
		radioTextWeek,
		radioTextMonth,
		radioTextYear,
		helpCaption,
		tooltipContent,
		addFilterButtonCaption,
		cancelFilterButtonCaption
	} = caption;

	const dateFromInit =
		value.type === DateRangeValueTypes.Concrete
			? value.dateFrom
			: undefined;
	const dateToInit =
		value.type === DateRangeValueTypes.Concrete ? value.dateTo : undefined;
	const [dateFrom, setDateFrom] = React.useState<Date | undefined>(dateFromInit);
	const [dateTo, setDateTo] = React.useState<Date | undefined>(dateToInit);
	const [hasError, setHasError] = React.useState<boolean>(false);
	const [dateRange, setDateRange] = React.useState<IDateRange>({
		dateFrom,
		dateTo
	});
	const [shouldShowFilter, setShouldShowFilter] = React.useState<boolean>(
		false
	);

	const handleSelectedNoFilter = () => {
		setDateFrom(undefined);
		setDateTo(undefined);
		onChange({ type: DateRangeValueTypes.NoFilter });
	};

	const handleSelectedLast = (period: LastPeriods) => () => {
		let newDateFrom;
		const newDateTo = getNow();
		if (period === LastPeriods.Week) {
			newDateFrom = getDaysBeforeNow(WEEK_IN_DAYS);
		} else if (period === LastPeriods.Month) {
			newDateFrom = getDaysBeforeNow(MONTH_IN_DAYS);
		} else {
			newDateFrom = getDaysBeforeNow(YEAR_IN_DAYS);
		}
		setDateFrom(newDateFrom);
		setDateTo(newDateTo);
		setDateRange({ dateFrom: newDateFrom, dateTo: newDateTo });

		onChange({ type: DateRangeValueTypes.Last, period });
	};

	const onCloseFilter = () => {
		setShouldShowFilter(false);
		setDateFrom(dateRange.dateFrom);
		setDateTo(dateRange.dateTo);
		setHasError(false);
	};

	const handleToggleFilter = () => {
		setShouldShowFilter(prev => !prev);
	};

	const handleApplyFilter = () => {
		setShouldShowFilter(false);
		setDateRange({ dateFrom, dateTo });
		if (dateFrom && dateTo) {
			onChange({
				dateFrom: changeDateToBeginOfTheDay(dateFrom),
				dateTo: changeDateToEndOfTheDay(dateTo),
				type: DateRangeValueTypes.Concrete,
			});
		}
	};

	const handleChangeDateFrom = (newDateFrom: Date) => {
		const beginDateFrom = changeDateToBeginOfTheDay(newDateFrom);
		const isError = dateTo ? beginDateFrom >= dateTo : false;
		setHasError(isError);

		if (!isError) {
			setDateFrom(beginDateFrom);
		}
	};

	const handleChangeDateTo = (newDateTo: Date) => {
		const endDateTo = changeDateToEndOfTheDay(newDateTo);
		const isError = dateFrom ? dateFrom >= endDateTo : false;
		setHasError(isError);

		if (!isError) {
			setDateTo(endDateTo);
		}
	};

	return (
		<div className={cn("kit-date-range", className)}>
			<div className="kit-date-range__content">
				<label className="kit-date-range__label">{labelNoFilter}</label>
				<RadioButton
					name="date"
					onSelected={handleSelectedNoFilter}
					checked={value.type === DateRangeValueTypes.NoFilter}
				>
					{radioTextNoFilter}
				</RadioButton>
			</div>
			<div className="kit-date-range__content">
				<label className="kit-date-range__label">{labelConcrete}</label>
				<div className="kit-date-range__radio-button">
					<RadioButton
						name="date"
						onClick={handleToggleFilter}
						checked={value.type === DateRangeValueTypes.Concrete}
					>
						{
							value.type !== DateRangeValueTypes.NoFilter
								? <span className='kit-date-range__radio-content'>
									{radioConcreteFromText}&nbsp;{dateRange.dateFrom ? parseDateToString(dateRange.dateFrom) : ''}&nbsp;
									{radioConcreteToText}&nbsp;{dateRange.dateTo ? parseDateToString(dateRange.dateTo) : ''}
								</span>
								: <span className='kit-date-range__radio-content'>
									{radioConcreteFromText}
									<span dangerouslySetInnerHTML={{ __html: EMPTY_SPACES }} />
									{radioConcreteToText}&nbsp;
								</span>
						}
					</RadioButton>

					{shouldShowFilter && (
						<WithOutsideClickFilterDetails
							editorComponent={
								<ConditionEditorPopup
									innerEditorComponent={
										<InnerEditorComponent
											months={caption.months}
											days={caption.days}
											radioConcreteFromText={
												radioConcreteFromText
											}
											radioConcreteToText={
												radioConcreteToText
											}
											tooltipContent={tooltipContent}
											hasError={hasError}
											dateFrom={dateFrom}
											dateTo={dateTo}
											onChangeDateFrom={handleChangeDateFrom}
											onChangeDateTo={handleChangeDateTo}
										/>
									}
									viewMode="edit"
									addFilterButtonCaption={
										addFilterButtonCaption
									}
									cancelFilterButtonCaption={
										cancelFilterButtonCaption
									}
									isAddFilterButtonEnabled={Boolean(dateFrom && dateTo && !hasError)}
									onAddFilterButtonClick={handleApplyFilter}
									onCancelFilterButtonClick={onCloseFilter}
								/>
							}
							viewMode="edit"
							onClickOutside={onCloseFilter}
							helpCaption={helpCaption}
							onClose={onCloseFilter}
							horizontal="center"
							vertical="top"
						/>
					)}
				</div>
			</div>
			<div className="kit-date-range__content">
				<label className="kit-date-range__label">{labelLast}</label>
				<RadioButton
					name="date"
					onSelected={handleSelectedLast(LastPeriods.Week)}
					checked={
						value.type === DateRangeValueTypes.Last &&
						value.period === LastPeriods.Week
					}
				>
					{radioTextWeek}
				</RadioButton>
				&nbsp;/&nbsp;
				<RadioButton
					name="date"
					onSelected={handleSelectedLast(LastPeriods.Month)}
					checked={
						value.type === DateRangeValueTypes.Last &&
						value.period === LastPeriods.Month
					}
				>
					{radioTextMonth}
				</RadioButton>
				&nbsp;/&nbsp;
				<RadioButton
					name="date"
					onSelected={handleSelectedLast(LastPeriods.Year)}
					checked={
						value.type === DateRangeValueTypes.Last &&
						value.period === LastPeriods.Year
					}
				>
					{radioTextYear}
				</RadioButton>
			</div>
		</div>
	);
};

export { DateRange };
