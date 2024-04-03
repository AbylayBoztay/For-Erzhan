import './promo.css';

const Promo = () => {
    return(
        <section className="promo">
            <div className="promo__wrapper">
                <div className="promo__grid_left">
                    <div className="frame1">Список врачей</div>
                    <div className="frame1">Поиск аналога лекарств</div>
                    <div className="frame1">Активные направления</div>
                    <div className="frame1">Платные услуги</div>
                    <div className="frame1">Ответы на вопросы</div>
                    <div className="frame1">Отзывы</div>
                </div>
                <div className="promo__grid_right">
                    <div className="frame2">
                        <div className="frame2-text">
                            <div className='frame2-text1'>Результаты</div>
                            <div className='frame2-text2'> анализов</div>
                        </div>
                        <div className="frame2__btn">
                            <button pereiti><span className='btn-text'>Перейти</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}

export default Promo;