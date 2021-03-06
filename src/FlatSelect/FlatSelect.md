```jsx
class ExampleFlatSelect extends React.Component {
	constructor() {
		super();
		this.state = {
			items: [true, false],
			selectedValue: true,
			height: 2,
			width: 3
		};
	}

	onFiltrationMethodSettingsUpdated(value) {
		this.setState({
			selectedValue: value
		});
	}

	render() {
		const { items, selectedValue, height, width } = this.state;
		const { disabled } = this.props;

		const itemFormatter = value => ({
			key: value ? "true" : "false",
			text: value ? "Да" : "Нет",
			value
		});

		return (
			<FlatSelect
				items={items}
				selectedValue={selectedValue}
				height={height}
				width={width}
				itemFormatter={itemFormatter}
				selectElementCaption="Выбрать элемент"
				loadListCaption="Загрузка..."
				onChange={value =>
					this.onFiltrationMethodSettingsUpdated(value)
				}
				disabled={disabled}
			/>
		);
	}
}

<div>
	<h5>Стандартное состояние</h5>
	<ExampleFlatSelect />
	<h5>Disabled</h5>
	<ExampleFlatSelect disabled={true} />
</div>;
```
