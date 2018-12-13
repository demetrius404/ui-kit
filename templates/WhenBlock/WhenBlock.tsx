import * as React from "react";
import { Button } from "../../components/Button/Button";
import { SectionWrapper } from "../../components/SectionWrapper/SectionWrapper";
import { Row } from "../../components/Row/Row";
import { Page } from "../../components/Page/Page";
import { Text } from "../../components/Text/Text";
import { RadioButton } from "../../components/RadioButton/RadioButton";
import { Select } from "../../components/Select/Select";
import { DateField } from "../../components/DateField/DateField";
import { TimeField } from "../../components/TimeField/TimeField";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { Input } from "../../components/Input/Input";

export class WhenBlock extends React.Component<{}> {
    state = {
        whatEdit: false,
        whomEdit: false,
        whenEdit: true,

        selectedActivePeriod: false,
        extendedEeventTrigger: false,
        isSelectedEvent: false,
    }

    toggleWhatState = () => this.setState({ whatEdit: !this.state.whatEdit })
    toggleWhomState = () => this.setState({ whomEdit: !this.state.whomEdit })
    toggleWhenState = () => this.setState({ whenEdit: !this.state.whenEdit })

    public render() {
        const { whatEdit, whomEdit, whenEdit } = this.state;

        return (
            <Page
                title='Триггер №15'
                description='Добавьте короткое описание триггера'
                hasTag
                isDevelop
                cantPlaying
                isPlaying
            >
                <SectionWrapper title='Когда' isEdit={whenEdit} onChangeState={this.toggleWhenState}>
                    {
                        whenEdit ? (
                            <>
                                <Row isEdit title='Период активности'>
                                    <div className='row__segment'>
                                        <RadioButton name='whenBlock1-group1' checked={true}>Триггер активен на протяжении всей кампании</RadioButton>
                                    </div>
                                    <RadioButton name='whenBlock1-group1'>Запланировать период активности</RadioButton>
                                    <div className='row__desk'>
                                        25 авг 2018 – 1 янв 2019
                                    </div>
                                </Row>
                                <Row isEdit title='Режим запуска'>
                                    <div className='row__segment'>
                                        <RadioButton name='whenBlock1-group2' checked={true}>По событию</RadioButton>
                                    </div>
                                    <div>
                                        <RadioButton name='whenBlock1-group2'>По графику</RadioButton>
                                    </div>
                                </Row>
                                <Row isEdit title='Инициатор события'>
                                    <div className='row__segment'>
                                        <RadioButton name='whenBlock1-group3' checked={true}>Любой</RadioButton>
                                    </div>
                                    <div>
                                        <RadioButton name='whenBlock1-group3'>Настроить фильтр по потребителям</RadioButton>
                                    </div>
                                </Row>
                                <Row isEdit title='Событие'>
                                    <div className='row__select'>
                                        <Select
                                            placeholder='Выберите событие'
                                            items={[
                                                { title: 'Потребитель попал в БД' },
                                                null,
                                                { title: 'Потребитель был сдедублицирован' },
                                                { title: 'Потребитель попал в сегмент' },
                                                { title: 'Потребитель вышел из сегментации' },
                                                { title: 'Изменился статус подписки' },
                                                { title: 'Первое подтверждение мобильного телефона' },
                                                null,
                                                { title: 'Изменение email' },
                                                { title: 'Первое подтверждение email' },
                                                { title: 'Обновление данных потребителя' },
                                                { title: 'Редактирование анкеты потребителем' },
                                                { title: 'Потребитель вошел на сайт' },
                                                { title: 'Активация секретного кода потребителем', disabled: true },
                                                { title: 'Потребитель получил приз' },
                                                { title: 'Изменение статуса FMCG заказа' },
                                                { title: 'Создание FMCG заказа' }
                                            ]}
                                        />
                                    </div>
                                </Row>
                                <div className='row__footer'>
                                    <div className='row__submit'>
                                        <Button color="gray" hasUnderline disabled size="large" >Сохранить</Button>
                                    </div>
                                    <Text mode='danger'>Для сохранения изменений необходимо выбрать событие или настроить график</Text>
                                </div>
                            </>
                        )
                            : (
                                <>
                                    <Row title='Период активности'>Триггер активен на протяжении всей кампании: 25 авг 2018 – 1 янв 2019</Row>
                                    <Row title='Инициатор события'>Любой</Row>
                                    <Row title='Запуск'><Text mode='danger'>Настройте режим запуска триггера</Text></Row>
                                </>
                            )
                    }
                </SectionWrapper>
                <SectionWrapper title='Когда' isEdit={whenEdit} onChangeState={this.toggleWhenState}>
                    {
                        whenEdit ? (
                            <>
                                <Row isEdit title='Период активности'>
                                    <div className='row__segment'>
                                        <RadioButton name='whenBlock2-group1'>Триггер активен на протяжении всей кампании</RadioButton>
                                    </div>
                                    <RadioButton name='whenBlock2-group1' checked={true}>Запланировать период активности</RadioButton>
                                    <div className='row__desk'>
                                        25 авг 2018 – 1 янв 2019
                                    </div>
                                </Row>
                                <Row isEdit title='Дата и время старта'>
                                    <div className='row__segment'>
                                        <DateField value='21.07.2018' />
                                    </div>
                                    <div>
                                        <TimeField hours={12} minutes={23} />
                                    </div>
                                </Row>
                                <Row isEdit title='Дата окончания'>
                                    <div className='row__segment'>
                                        <DateField disabled value='21.07.2019' />
                                    </div>
                                    <div className='row__segment'>
                                        <TimeField disabled hours={12} minutes={20} />
                                    </div>
                                    <Checkbox checked text='Триггер активен до конца кампании' />
                                </Row>
                                <Row isEdit title='Режим запуска'>
                                    <div className='row__segment'>
                                        <RadioButton name='whenBlock2-group2' checked={true}>По событию</RadioButton>
                                    </div>
                                    <div>
                                        <RadioButton name='whenBlock2-group2'>По графику</RadioButton>
                                    </div>
                                </Row>
                                <Row isEdit title='Инициатор события'>
                                    <div className='row__segment'>
                                        <RadioButton name='whenBlock2-group3' checked={true}>Любой</RadioButton>
                                    </div>
                                    <div>
                                        <RadioButton name='whenBlock2-group3'>Настроить фильтр по потребителям</RadioButton>
                                    </div>
                                </Row>
                                <Row isEdit title='Событие'>
                                    <div className='row__select'>
                                        <Select
                                            placeholder='Выберите событие'
                                            items={[
                                                { title: 'Потребитель попал в БД' },
                                                null,
                                                { title: 'Потребитель был сдедублицирован' },
                                                { title: 'Потребитель попал в сегмент' },
                                                { title: 'Потребитель вышел из сегментации' },
                                                { title: 'Изменился статус подписки' },
                                                { title: 'Первое подтверждение мобильного телефона' },
                                                null,
                                                { title: 'Изменение email' },
                                                { title: 'Первое подтверждение email' },
                                                { title: 'Обновление данных потребителя' },
                                                { title: 'Редактирование анкеты потребителем' },
                                                { title: 'Потребитель вошел на сайт' },
                                                { title: 'Активация секретного кода потребителем', disabled: true },
                                                { title: 'Потребитель получил приз' },
                                                { title: 'Изменение статуса FMCG заказа' },
                                                { title: 'Создание FMCG заказа' }
                                            ]}
                                        />
                                    </div>
                                </Row>
                                <div className='row__footer'>
                                    <div className='row__submit'>
                                        <Button color="gray" hasUnderline disabled size="large" >Сохранить</Button>
                                    </div>
                                    <Text mode='danger'>Для сохранения изменений необходимо выбрать событие или настроить график</Text>
                                </div>
                            </>
                        )
                            : (
                                <>
                                    <Row title='Период активности'>Триггер активен на протяжении всей кампании: 25 авг 2018 – 1 янв 2019</Row>
                                    <Row title='Инициатор события'>Любой</Row>
                                    <Row title='Запуск'><Text mode='danger'>Настройте режим запуска триггера</Text></Row>
                                </>
                            )
                    }
                </SectionWrapper>
                <SectionWrapper title='Когда' isEdit={whenEdit} onChangeState={this.toggleWhenState}>
                    {
                        whenEdit ? (
                            <>
                                <Row isEdit title='Период активности'>
                                    <div className='row__segment'>
                                        <RadioButton name='whenBlock3-group1' checked={true}>Триггер активен на протяжении всей кампании</RadioButton>
                                    </div>
                                    <RadioButton name='whenBlock3-group1'>Запланировать период активности</RadioButton>
                                    <div className='row__desk'>
                                        25 авг 2018 – 1 янв 2019
                                    </div>
                                </Row>
                                <Row isEdit title='Режим запуска'>
                                    <div className='row__segment'>
                                        <RadioButton name='whenBlock3-group2' checked={true}>По событию</RadioButton>
                                    </div>
                                    <div>
                                        <RadioButton name='whenBlock3-group2'>По графику</RadioButton>
                                    </div>
                                </Row>
                                <Row isEdit title='Инициатор события'>
                                    <div className='row__segment'>
                                        <RadioButton name='whenBlock3-group3'>Любой</RadioButton>
                                    </div>
                                    <div>
                                        <RadioButton name='whenBlock3-group3' checked={true}>Настроить фильтр по потребителям</RadioButton>
                                    </div>
                                    <div className='row__extended-event'>
                                        <Select
                                            placeholder='Выберите событие'
                                            size='small'
                                            items={[
                                                { title: 'Потребитель попал в БД' },
                                                null,
                                                { title: 'Потребитель был сдедублицирован' },
                                                { title: 'Потребитель попал в сегмент' },
                                                { title: 'Потребитель вышел из сегментации' },
                                                { title: 'Изменился статус подписки' },
                                                { title: 'Первое подтверждение мобильного телефона' },
                                                null,
                                                { title: 'Изменение email' },
                                                { title: 'Первое подтверждение email' },
                                                { title: 'Обновление данных потребителя' },
                                                { title: 'Редактирование анкеты потребителем' },
                                                { title: 'Потребитель вошел на сайт' },
                                                { title: 'Активация секретного кода потребителем', disabled: true },
                                                { title: 'Потребитель получил приз' },
                                                { title: 'Изменение статуса FMCG заказа' },
                                                { title: 'Создание FMCG заказа' }
                                            ]}
                                        />
                                    </div>
                                </Row>
                                <Row isEdit title='Событие'>
                                    <div className='row__select'>
                                        <Select
                                            placeholder='Выберите событие'
                                            items={[
                                                { title: 'Потребитель попал в БД' },
                                                null,
                                                { title: 'Потребитель был сдедублицирован' },
                                                { title: 'Потребитель попал в сегмент' },
                                                { title: 'Потребитель вышел из сегментации' },
                                                { title: 'Изменился статус подписки' },
                                                { title: 'Первое подтверждение мобильного телефона' },
                                                null,
                                                { title: 'Изменение email' },
                                                { title: 'Первое подтверждение email' },
                                                { title: 'Обновление данных потребителя' },
                                                { title: 'Редактирование анкеты потребителем' },
                                                { title: 'Потребитель вошел на сайт' },
                                                { title: 'Активация секретного кода потребителем', disabled: true },
                                                { title: 'Потребитель получил приз' },
                                                { title: 'Изменение статуса FMCG заказа' },
                                                { title: 'Создание FMCG заказа' }
                                            ]}
                                        />
                                    </div>
                                </Row>
                                <div className='row__footer'>
                                    <div className='row__submit'>
                                        <Button color="gray" hasUnderline disabled size="large" >Сохранить</Button>
                                    </div>
                                    <Text mode='danger'>Для сохранения изменений необходимо выбрать событие или настроить график</Text>
                                </div>
                            </>
                        )
                            : (
                                <>
                                    <Row title='Период активности'>Триггер активен на протяжении всей кампании: 25 авг 2018 – 1 янв 2019</Row>
                                    <Row title='Инициатор события'>Любой</Row>
                                    <Row title='Запуск'><Text mode='danger'>Настройте режим запуска триггера</Text></Row>
                                </>
                            )
                    }
                </SectionWrapper>
                <SectionWrapper title='Когда' isEdit={whenEdit} onChangeState={this.toggleWhenState}>
                    {
                        whenEdit ? (
                            <>
                                <Row isEdit title='Период активности'>
                                    <div className='row__segment'>
                                        <RadioButton name='whenBlock4-group1' checked={true}>Триггер активен на протяжении всей кампании</RadioButton>
                                    </div>
                                    <RadioButton name='whenBlock4-group1'>Запланировать период активности</RadioButton>
                                    <div className='row__desk'>
                                        25 авг 2018 – 1 янв 2019
                                    </div>
                                </Row>
                                <Row isEdit title='Режим запуска'>
                                    <div className='row__segment'>
                                        <RadioButton name='whenBlock4-group2' checked={true}>По событию</RadioButton>
                                    </div>
                                    <div>
                                        <RadioButton name='whenBlock4-group2'>По графику</RadioButton>
                                    </div>
                                </Row>
                                <Row isEdit title='Инициатор события'>
                                    <div className='row__segment'>
                                        <RadioButton name='whenBlock4-group3'>Любой</RadioButton>
                                    </div>
                                    <div>
                                        <RadioButton name='whenBlock4-group3' checked={true}>Настроить фильтр по потребителям</RadioButton>
                                    </div>
                                    <div className='row__filter row__desk' />
                                </Row>
                                <Row isEdit title='Событие'>
                                    <div className='row__select'>
                                        <Select
                                            placeholder='Выберите событие'
                                            items={[
                                                { title: 'Потребитель попал в БД' },
                                                null,
                                                { title: 'Потребитель был сдедублицирован' },
                                                { title: 'Потребитель попал в сегмент' },
                                                { title: 'Потребитель вышел из сегментации' },
                                                { title: 'Изменился статус подписки' },
                                                { title: 'Первое подтверждение мобильного телефона' },
                                                null,
                                                { title: 'Изменение email' },
                                                { title: 'Первое подтверждение email' },
                                                { title: 'Обновление данных потребителя' },
                                                { title: 'Редактирование анкеты потребителем' },
                                                { title: 'Потребитель вошел на сайт' },
                                                { title: 'Активация секретного кода потребителем', disabled: true },
                                                { title: 'Потребитель получил приз' },
                                                { title: 'Изменение статуса FMCG заказа' },
                                                { title: 'Создание FMCG заказа' }
                                            ]}
                                        />
                                    </div>
                                </Row>
                                <div className='row__footer'>
                                    <div className='row__submit'>
                                        <Button color="gray" hasUnderline disabled size="large" >Сохранить</Button>
                                    </div>
                                    <Text mode='danger'>Для сохранения изменений необходимо выбрать событие или настроить график</Text>
                                </div>
                            </>
                        )
                            : (
                                <>
                                    <Row title='Период активности'>Триггер активен на протяжении всей кампании: 25 авг 2018 – 1 янв 2019</Row>
                                    <Row title='Инициатор события'>Любой</Row>
                                    <Row title='Запуск'><Text mode='danger'>Настройте режим запуска триггера</Text></Row>
                                </>
                            )
                    }
                </SectionWrapper>
                <SectionWrapper title='Когда' isEdit={whenEdit} onChangeState={this.toggleWhenState}>
                    {
                        whenEdit ? (
                            <>
                                <Row isEdit title='Период активности'>
                                    <div className='row__segment'>
                                        <RadioButton name='whenBlock5-group1' checked={true}>Триггер активен на протяжении всей кампании</RadioButton>
                                    </div>
                                    <RadioButton name='whenBlock5-group1'>Запланировать период активности</RadioButton>
                                    <div className='row__desk'>
                                        25 авг 2018 – 1 янв 2019
                                    </div>
                                </Row>
                                <Row isEdit title='Режим запуска'>
                                    <div className='row__segment'>
                                        <RadioButton name='whenBlock5-group2' checked={true}>По событию</RadioButton>
                                    </div>
                                    <div>
                                        <RadioButton name='whenBlock5-group2'>По графику</RadioButton>
                                    </div>
                                </Row>
                                <Row isEdit title='Инициатор события'>
                                    <div className='row__segment'>
                                        <RadioButton name='whenBlock5-group3'>Любой</RadioButton>
                                    </div>
                                    <div>
                                        <RadioButton name='whenBlock5-group3' checked={true}>Настроить фильтр по потребителям</RadioButton>
                                    </div>
                                    <div className='row__filter row__desk' />
                                </Row>
                                <Row isEdit title='Событие'>
                                    <div className='row__select'>
                                        <Select
                                            placeholder='Выберите событие'
                                            items={[
                                                { title: 'Потребитель попал в БД' },
                                                null,
                                                { title: 'Потребитель был сдедублицирован' },
                                                { title: 'Потребитель попал в сегмент' },
                                                { title: 'Потребитель вышел из сегментации' },
                                                { title: 'Изменился статус подписки' },
                                                { title: 'Первое подтверждение мобильного телефона' },
                                                null,
                                                { title: 'Изменение email' },
                                                { title: 'Первое подтверждение email' },
                                                { title: 'Обновление данных потребителя' },
                                                { title: 'Редактирование анкеты потребителем' },
                                                { title: 'Потребитель вошел на сайт' },
                                                { title: 'Активация секретного кода потребителем', disabled: true },
                                                { title: 'Потребитель получил приз' },
                                                { title: 'Изменение статуса FMCG заказа' },
                                                { title: 'Создание FMCG заказа' }
                                            ]}
                                        />
                                    </div>
                                    <div className='row__desk'>
                                        <Checkbox text='Настроить фильтр по этому событию' />
                                    </div>
                                </Row>
                                <Row isEdit title='Время от события'>
                                    <div className='row__segment row__text'>
                                        Активировать триггер
                                    </div>
                                    <div className='row__segment'>
                                        <Select
                                            placeholder='Выберите'
                                            items={[
                                                { title: 'сразу' },
                                                { title: 'через неделю' },
                                                { title: 'через месяц' },
                                            ]}
                                        />
                                    </div>
                                    <div className='row__text'>
                                        после события
                                    </div>
                                </Row>
                                <Row isEdit title='Срок актуальности'>
                                    <div className='row__segment row__text'>
                                        Допускается запоздание срабатывания триггера не более, чем на
                                    </div>
                                    <div className='row__segment'>
                                        <div style={{ width: '40px' }}> 
                                            <Input defaultValue='10' maxLength={2} />
                                        </div>
                                    </div>
                                    <div>
                                        <Select
                                            placeholder='Выберите'
                                            items={[
                                                { title: 'минут' },
                                                { title: 'часов' },
                                                { title: 'дней' },
                                            ]}
                                        />
                                    </div>
                                </Row>
                                <div className='row__footer'>
                                    <div className='row__submit'>
                                        <Button color="gray" hasUnderline disabled size="large" >Сохранить</Button>
                                    </div>
                                    <Text mode='danger'>Для сохранения изменений необходимо выбрать событие или настроить график</Text>
                                </div>
                            </>
                        )
                            : (
                                <>
                                    <Row title='Период активности'>Триггер активен на протяжении всей кампании: 25 авг 2018 – 1 янв 2019</Row>
                                    <Row title='Инициатор события'>Любой</Row>
                                    <Row title='Запуск'><Text mode='danger'>Настройте режим запуска триггера</Text></Row>
                                </>
                            )
                    }
                </SectionWrapper>
                <SectionWrapper title='Когда' isEdit={whenEdit} onChangeState={this.toggleWhenState}>
                    {
                        whenEdit ? (
                            <>
                                <Row isEdit title='Период активности'>
                                    <div className='row__segment'>
                                        <RadioButton name='whenBlock6-group1' checked={true}>Триггер активен на протяжении всей кампании</RadioButton>
                                    </div>
                                    <RadioButton name='whenBlock6-group1'>Запланировать период активности</RadioButton>
                                    <div className='row__desk'>
                                        25 авг 2018 – 1 янв 2019
                                    </div>
                                </Row>
                                <Row isEdit title='Режим запуска'>
                                    <div className='row__segment'>
                                        <RadioButton name='whenBlock6-group2' checked={true}>По событию</RadioButton>
                                    </div>
                                    <div>
                                        <RadioButton name='whenBlock6-group2'>По графику</RadioButton>
                                    </div>
                                </Row>
                                <Row isEdit title='Инициатор события'>
                                    <div className='row__segment'>
                                        <RadioButton name='whenBlock6-group3'>Любой</RadioButton>
                                    </div>
                                    <div>
                                        <RadioButton name='whenBlock6-group3' checked={true}>Настроить фильтр по потребителям</RadioButton>
                                    </div>
                                    <div className='row__filter row__desk' />
                                </Row>
                                <Row isEdit title='Событие'>
                                    <div className='row__select'>
                                        <Select
                                            placeholder='Выберите событие'
                                            items={[
                                                { title: 'Потребитель попал в БД' },
                                                null,
                                                { title: 'Потребитель был сдедублицирован' },
                                                { title: 'Потребитель попал в сегмент' },
                                                { title: 'Потребитель вышел из сегментации' },
                                                { title: 'Изменился статус подписки' },
                                                { title: 'Первое подтверждение мобильного телефона' },
                                                null,
                                                { title: 'Изменение email' },
                                                { title: 'Первое подтверждение email' },
                                                { title: 'Обновление данных потребителя' },
                                                { title: 'Редактирование анкеты потребителем' },
                                                { title: 'Потребитель вошел на сайт' },
                                                { title: 'Активация секретного кода потребителем', disabled: true },
                                                { title: 'Потребитель получил приз' },
                                                { title: 'Изменение статуса FMCG заказа' },
                                                { title: 'Создание FMCG заказа' }
                                            ]}
                                        />
                                    </div>
                                    <div className='row__desk'>
                                        <Checkbox checked text='Настроить фильтр по этому событию' />
                                    </div>
                                </Row>
                                <Row isEdit title='Триггер сработает при попадании под фильтр по активации кодов'>
                                    <div className='row__extended-event'>
                                        <Select
                                            placeholder='Выберите событие'
                                            size='small'
                                            items={[
                                                { title: 'Потребитель попал в БД' },
                                                null,
                                                { title: 'Потребитель был сдедублицирован' },
                                                { title: 'Потребитель попал в сегмент' },
                                                { title: 'Потребитель вышел из сегментации' },
                                                { title: 'Изменился статус подписки' },
                                                { title: 'Первое подтверждение мобильного телефона' },
                                                null,
                                                { title: 'Изменение email' },
                                                { title: 'Первое подтверждение email' },
                                                { title: 'Обновление данных потребителя' },
                                                { title: 'Редактирование анкеты потребителем' },
                                                { title: 'Потребитель вошел на сайт' },
                                                { title: 'Активация секретного кода потребителем', disabled: true },
                                                { title: 'Потребитель получил приз' },
                                                { title: 'Изменение статуса FMCG заказа' },
                                                { title: 'Создание FMCG заказа' }
                                            ]}
                                        />
                                    </div>
                                </Row>
                                <Row isEdit title='Время от события'>
                                    <div className='row__segment row__text'>
                                        Активировать триггер
                                    </div>
                                    <div className='row__segment'>
                                        <Select
                                            placeholder='Выберите'
                                            items={[
                                                { title: 'сразу' },
                                                { title: 'через неделю' },
                                                { title: 'через месяц' },
                                            ]}
                                        />
                                    </div>
                                    <div className='row__text'>
                                        после события
                                    </div>
                                </Row>
                                <Row isEdit title='Срок актуальности'>
                                    <div className='row__segment row__text'>
                                        Допускается запоздание срабатывания триггера не более, чем на
                                    </div>
                                    <div className='row__segment'>
                                        <div style={{ width: '40px' }}> 
                                            <Input defaultValue='10' maxLength={2} />
                                        </div>
                                    </div>
                                    <div>
                                        <Select
                                            placeholder='Выберите'
                                            items={[
                                                { title: 'минут' },
                                                { title: 'часов' },
                                                { title: 'дней' },
                                            ]}
                                        />
                                    </div>
                                </Row>
                                <div className='row__footer'>
                                    <div className='row__submit'>
                                        <Button color="gray" hasUnderline disabled size="large" >Сохранить</Button>
                                    </div>
                                    <Text mode='danger'>Для сохранения изменений необходимо выбрать событие или настроить график</Text>
                                </div>
                            </>
                        )
                            : (
                                <>
                                    <Row title='Период активности'>Триггер активен на протяжении всей кампании: 25 авг 2018 – 1 янв 2019</Row>
                                    <Row title='Инициатор события'>Любой</Row>
                                    <Row title='Запуск'><Text mode='danger'>Настройте режим запуска триггера</Text></Row>
                                </>
                            )
                    }
                </SectionWrapper>
                <SectionWrapper title='Кому' isEdit={whomEdit} onChangeState={this.toggleWhomState}>
                    {whomEdit ? (
                        <>
                                <Row isEdit title='Период активности'>
                                    <div className='row__segment'>
                                        <RadioButton name='group21' checked={true}>Каждый раз при попадании в фильтр триггера</RadioButton>
                                    </div>
                                    <RadioButton name='group21'>Периодически</RadioButton>
                                </Row>
                                <Row isEdit title='Число срабатываний'>
                                    <div className='row__segment'>
                                        <RadioButton name='group22' checked={true}>Неограничено</RadioButton>
                                    </div>
                                    <div>
                                        <RadioButton name='group22'>Ограничить</RadioButton>
                                    </div>
                                </Row>
                                <Row isEdit title='Цель триггера'>
                                    <div className='row__select'>
                                        <Select
                                            placeholder='Выберите цель триггера'
                                            defaultValue='Потребитель из события в блоке «Когда»'
                                            items={[
                                                { title: 'Потребитель из события в блоке «Когда»' },
                                                null,
                                                { title: 'Потребитель был сдедублицирован' },
                                                { title: 'Потребитель попал в сегмент' },
                                                { title: 'Потребитель вышел из сегментации' },
                                                { title: 'Изменился статус подписки' },
                                                { title: 'Первое подтверждение мобильного телефона' },
                                                null,
                                                { title: 'Изменение email' },
                                                { title: 'Первое подтверждение email' },
                                                { title: 'Обновление данных потребителя' },
                                                { title: 'Редактирование анкеты потребителем' },
                                                { title: 'Потребитель вошел на сайт' },
                                                { title: 'Активация секретного кода потребителем', disabled: true },
                                                { title: 'Потребитель получил приз' },
                                                { title: 'Изменение статуса FMCG заказа' },
                                                { title: 'Создание FMCG заказа' }
                                            ]}
                                        />
                                    </div>
                                    <div className='row__desk'>
                                        Триггер применится к конкретному потребителю
                                    </div>
                                </Row>
                                <div className='row__footer'>
                                    <div className='row__submit'>
                                        <Button color="gray" hasUnderline disabled size="large" >Сохранить</Button>
                                    </div>
                                    <Text mode='danger'>Для сохранения изменений необходимо выбрать событие в блоке «Когда»</Text>
                                </div>
                            </>
                    ) : (
                        <>
                            <Row title='Применять к потребителю'>Каждый раз при попадании в фильтр триггера</Row>
                            <Row title='Число срабатываний'>Неограничено</Row>
                            <Row title='Цель триггера'>Настройте потребителей, к которым будут применяться действия триггера</Row>
                        </>
                    )}
                </SectionWrapper>
                <SectionWrapper title='Что' isEdit={whatEdit} onChangeState={this.toggleWhatState}>
                    {whatEdit ? (
                        <>
                            <Row isEdit title='Действие 1'>
                                <div className='row__select'>
                                    <Select
                                        placeholder='Выберите действие'
                                        isFiltered
                                        items={[
                                            { title: 'Потребитель из события в блоке «Когда»' },
                                            { title: 'Потребитель был сдедублицирован' },
                                            { title: 'Потребитель попал в сегмент' },
                                            { title: 'Потребитель вышел из сегментации' },
                                            { title: 'Изменился статус подписки' },
                                            { title: 'Первое подтверждение мобильного телефона' },
                                            { title: 'Изменение email' },
                                            { title: 'Первое подтверждение email' },
                                            { title: 'Обновление данных потребителя' },
                                            { title: 'Редактирование анкеты потребителем' },
                                            { title: 'Потребитель вошел на сайт' },
                                            { title: 'Активация секретного кода потребителем' },
                                            { title: 'Потребитель получил приз' },
                                            { title: 'Изменение статуса FMCG заказа' },
                                            { title: 'Создание FMCG заказа' }
                                        ]}
                                    />
                                </div>
                            </Row>
                            <div className='row__footer'>
                                <div className='row__submit'>
                                    <Button color="gray" hasUnderline disabled size="large" >Сохранить</Button>
                                </div>
                                <Text mode='danger'>Для сохранения изменений необходимо добавить хотя бы одно действие</Text>
                            </div>
                        </>
                    ) : (
                        <Row title='Действие'>Настройте одно или несколько действий триггера</Row>
                    )}
                </SectionWrapper>
            </Page>
        );
    }
}