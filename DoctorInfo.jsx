import avatarOfDoctor from './../../img/unsplash_FVh_yqLR9eA.jpg'
import './doctorInfo.css';

const DoctorInfo = () => {
    return(
        <section className="doctorInfo">
            <div className="doctorInfo__wrapper">
                <div className="doctorInfo__current">
                    <div className="left-side">
                        <div className="avatar">
                            <img src={avatarOfDoctor} alt="" />
                        </div>
                        <div className="nameOfDoctor">
                            <span>Иванова Анна Петровна</span>
                        </div>
                        <div className="achieveOfDoctor">
                            Заслуженный врач, Профессор
                        </div>
                        <div className="mailOfDoctor">
                            anna.Ivanova@example.com
                        </div>
                        <div className="phoneNumberOfDoctor">
                            +7 777 777 77 77
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="specializationOfDoctor">
                            <div className="title1">Специализация</div>
                            Кардиолог, член Европейской Ассоциации Кардиологов
                        </div>
                        <div className="educationOfDoctor">
                            <div className="title2">Образование</div>
                            <li><span>Lorem ipsum dolor sit amet consectetur.</span></li>
                            <li><span>Lorem ipsum dolor sit amet consectetur.</span></li>
                        </div>
                        <br />
                        <div className="backgroundOfDoctor">
                            <div className="title3">Опыт работы</div>
                            <li><span>Lorem ipsum dolor sit amet consectetur.</span></li>
                            <li><span>Lorem ipsum dolor sit amet consectetur.</span></li>
                        </div>
                    </div>
                </div>
                <div className="doctorInfo__back">
                <div className="left-side_back">
                        <div className="avatar_back">
                            <img src={avatarOfDoctor} alt="" />
                        </div>
                        <div className="nameOfDoctor_back">
                            <span>Иванова Анна Петровна</span>
                        </div>
                        <div className="achieveOfDoctor_back">
                            Заслуженный врач, Профессор
                        </div>
                        <div className="mailOfDoctor_back">
                            anna.Ivanova@example.com
                        </div>
                        <div className="phoneNumberOfDoctor_back">
                            +7 777 777 77 77
                        </div>
                    </div>
                    <div className="right-side_back">
                        <div className="specializationOfDoctor_back">
                            <div className="title1_back">Специализация</div>
                            Реабилитолог, эксперт в области физической реабилитации и восстановительной медицины.
                        </div>
                        <div className="educationOfDoctor_back">
                            <div className="title2_back">Образование</div>
                            <li><span>Lorem ipsum dolor sit amet consectetur.</span></li>
                            <li><span>Lorem ipsum dolor sit amet consectetur.</span></li>
                        </div>
                        <br />
                        <div className="backgroundOfDoctor_back">
                            <div className="title3_back">Опыт работы</div>
                            <li><span>Lorem ipsum dolor sit amet consectetur.</span></li>
                            <li><span>Lorem ipsum dolor sit amet consectetur.</span></li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DoctorInfo;