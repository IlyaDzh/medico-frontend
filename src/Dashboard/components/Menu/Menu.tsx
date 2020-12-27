import React from "react";
import { Link } from "react-router-dom";

interface IMenu {
    isDoctor?: boolean;
}

export const Menu: React.FC<IMenu> = ({ isDoctor }) => {
    return (
        <aside>
            {isDoctor ? (
                <div>
                    <Link to="/dashboard/main">Главная</Link>
                    <Link to="/dashboard/calendar">График работы</Link>
                    <Link to="/dashboard/logbook">Журнал записей</Link>
                    <Link to="/dashboard/patients">Пациенты</Link>
                    <Link to="/dashboard/messages">Сообщения</Link>
                    <Link to="/dashboard/settings">Настройки</Link>
                </div>
            ) : (
                <div>
                    <Link to="/dashboard/alerts">Мои записи</Link>
                    <Link to="/dashboard/results">Назначения</Link>
                    <Link to="/dashboard/analyzes">Мои анализы</Link>
                    <Link to="/dashboard/medical-card">Мед карта</Link>
                    <Link to="/dashboard/messages">Сообщения</Link>
                    <Link to="/dashboard/settings">Настройки</Link>
                </div>
            )}
        </aside>
    );
};
