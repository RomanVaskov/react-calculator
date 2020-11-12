import React from "react";
import { useSelector } from "react-redux";

const TextDescriptions = () => {
  const month = useSelector((data) => data.bank.bankMonth);
  const contributionMoney = useSelector((data) => data.bank.contributionMoney);
  const monthPay = useSelector((data) => data.bank.payResult.monthPay);
  const totalMoney = useSelector((data) => data.bank.payResult.totalMoney);
  const total = useSelector((data) => data.product.total);
  const phone = useSelector((data) => data.personalData.phone);
  const pickupPoint = useSelector((data) => data.address.pickupPoint);
  const address = useSelector((data) => data.address.address);
  const productInfo = useSelector((data) => data.product.productInfo);
  const pay = useSelector((data) => data.payment.pay);
  const year = useSelector((data) => data.payment.date.year);
  const time = useSelector((data) => data.payment.date.time);
  const order = useSelector((data) => data.personalData.order);

  return (
    <div className="col-12">
      <div className="row">
        <div className="col-12">
          <div className="border">
            <span className="results">
              Могу предложить Вам следующие условия: Период оплаты {month}{" "}
              месяцев. Первоначальный взнос - {contributionMoney} р, ежемесячный
              платеж {monthPay} р. Итоговая сумма, которую Вы оплатите ={" "}
              {totalMoney}
              р. Чем меньше ежемесячный платеж, тем выше процент одобрения
              банка, возможно досрочное погашение. Подскажите пожалуйста, эти
              условия Вам подходят?
            </span>
            <span className="results">
              Обращаю Ваше внимание, что при выборе условий с более длительным
              сроком и минимальном ежемесячным платежом выше вероятность
              получения положительного решения. Поэтому рекомендую Вам следующие
              условия: Период оплаты {month} месяцев. Первоначальный взнос -
              {contributionMoney} рублей, ежемесячный платеж {monthPay} рублей.
              Итоговая сумма, которую Вы оплатите = {totalMoney} р. По условиям
              предусмотрено досрочное погашение, Вы сможете оплачивать большими
              суммами, закроете договор за 18 мес., итоговая сумма будет меньше.
              Подскажите пожалуйста, эти условия Вам подходят?
            </span>
            <span className="results">
              Период оплаты {month} месяцев. Первоначальный взнос -{" "}
              {contributionMoney} р, ежемесячный платеж {monthPay} р. Итоговая
              сумма, которую Вы оплатите ={totalMoney} р.
            </span>

            <span className="results">
              Спасибо за ожидание <br />
              Ваш заказ №{order} принят. <br />
              Будет доставлен по адресу: ПВЗ Гомель ул. блаблабла <br />
              Товар(ы) в заказе: <br />
              <ul>
                {!productInfo
                  ? "Пусто"
                  : productInfo.map((item, index) => {
                      return (
                        <li>
                          {index + 1}, {item.name} - {item.qty}шт -{item.price}{" "}
                          руб <br />
                        </li>
                      );
                    })}
              </ul>
              Итоговая сумма заказа - {total} руб.
              <br />
              График работы:
              <br />
              пн-пт: 10:00-20:00,
              <br />
              сб-вс: 10:00-19:00.
              <br />
              Спасибо за заказ <br />
            </span>
            <span className="results">
              Спасибо за ожидание <br />
              Ваш заказ №{order} принят. Оформлен в ИдеяБанк на {month} мес с
              первоначальным взносом {contributionMoney} руб
              <br />
              Будет доставлен по адресу: {pickupPoint} {address} <br />
              Товар(ы) в заказе: <br />
              <ul>
                {!productInfo
                  ? "Пусто"
                  : productInfo.map((item, index) => {
                      return (
                        <li>
                          {index + 1}, {item.name} - {item.qty}шт -{item.price}{" "}
                          руб <br />
                        </li>
                      );
                    })}
              </ul>
              Итоговая сумма заказа - {totalMoney} руб.
              <br />
              <br />
              Вам на Ваш мобильный телефон {phone} придет смс с уведомление о
              регистрации блаблабла
            </span>

            {/* <!-- Шаблон без вывода банков, по адресу --> */}
            <span className="results">
              Спасибо за ожидание. <br />
              <br />
              Ваш заказ №{order} принят и будет доставлен по адресу: {address}
              <br />
              <br />
              Дата доставки: {year} с 10:00 до {time}. Вам придет смс с точным
              временем приезда курьера. <br />
              <br />
              Способ оплаты: {pay}
              <br />
              <br />
              Товар(ы) из заказа: <br />
              <ul>
                {!productInfo
                  ? "Пусто"
                  : productInfo.map((item, index) => {
                      return (
                        <li>
                          {index + 1}, {item.name} - {item.qty}шт -{item.price}{" "}
                          руб <br />
                        </li>
                      );
                    })}
              </ul>
              Итоговая сумма заказа - {totalMoney} руб.
              <br />
              Спасибо за заказ! <br />
            </span>

            {/* <!-- Шаблон ПВЗ, без банка --> */}
            <span className="results">
              Спасибо за ожидание.
              <br />
              <br />
              Ваш заказ №{order} принят и будет доставлен на пункт выдачи
              заказов по адресу: {address}
              <br />
              <br />
              Дата получения товара: {year}. Заказ можно забрать С10:00 до 17:00
              либо в течение 5 дней по графику работы пункта выдачи заказов.
              Дополнительно Вам будет отправлено смс о поступлении товара в
              пункт выдачи. Способ оплаты: {pay}
              <br />
              Товар(ы) из заказа:
              <br />
              <ul>
                {!productInfo
                  ? "Пусто"
                  : productInfo.map((item, index) => {
                      return (
                        <li>
                          {index + 1}, {item.name} - {item.qty}шт -{item.price}{" "}
                          руб <br />
                        </li>
                      );
                    })}
              </ul>
              Итоговая сумма заказа - {totalMoney} руб.
              <br />
              График работы:
              <br />
              ГРАФИК Спасибо за заказ!
              <br />
            </span>

            {/* <!-- Шаблон банка ИдеяБанк/БелВЭБ --> */}
            <span className="results">
              Спасибо за ожидание
              <br />
              Ваш заказ №{order} оформлен.
              <br />
              Оформлен по Оплате частями на {month} мес в ИдеяБанк,
              первоначальный взнос {contributionMoney} руб наличными/без
              первоначального взноса.
              <br />
              ФИО: ФИО
              <br />
              Адрес доставки: {address}
              <br />
              В заказе:
              <br />
              - <br />
              - Доставка - руб
              <br />
              <ul>
                {!productInfo
                  ? "Пусто"
                  : productInfo.map((item, index) => {
                      return (
                        <li>
                          {index + 1}, {item.name} - {item.qty}шт -{item.price}{" "}
                          руб <br />
                        </li>
                      );
                    })}
              </ul>
              Итоговая сумма заказа - {totalMoney} руб.
              <br />
              На ваш номер телефона {phone} будет выслана ссылка на забирай.ву.
              Вам необходимо зайти на сайт «Забирай бай» (zabiray.by). Пройти
              регистрацию по номеру Вашего телефона {phone}, который Вы нам
              указали в заказе. В личном кабинете уже будет Ваш заказ.
              Необходимо подтвердить оформление кредита. https://zabiray.by/{" "}
              <br />
              Расчёт с учетом доставки ориентировочно:
              <br />
              Все данные верны?
              <br />
            </span>

            {/* <!-- Шаблон Паритет/Дабрабыт --> */}
            <span className="results">
              Спасибо за ожидание
              <br />
              Ваш заказ №{order} оформлен.
              <br />
              Оформлен по Оплате частями на {month} мес в Банк
              Дабрабыт/Паритетбанк, первоначальный взнос {contributionMoney} руб
              наличными/без первоначального взноса
              <br />
              ФИО: ФИО
              <br />
              Адрес доставки: {address}
              <br />
              В заказе:
              <br />
              - Доставка - руб
              <br />
              <ul>
                {!productInfo
                  ? "Пусто"
                  : productInfo.map((item, index) => {
                      return (
                        <li>
                          {index + 1}, {item.name} - {item.qty}шт -{item.price}{" "}
                          руб <br />
                        </li>
                      );
                    })}
              </ul>
              Итоговая сумма заказа - {totalMoney} руб.
              <br />
              На ваш номер телефона {phone} будет выслана ссылка на регистрацию
              RBroker (https://www.rbroker.by/login). Вам необходимо зайти на
              сайт, заполнить анкету и прикрепить фото паспорта, после чего с
              Вами свяжется сотрудник банка.
              <br />
              Все данные верны?
              <br />
            </span>

            {/* <!-- Шаблон Приорбанк/ВТБ --> */}
            <span className="results">
              Спасибо за ожидание
              <br />
              Ваш заказ №{order} оформлен.
              <br />
              Оформлен по Оплате частями на {month} мес в ВТБ, без
              первоначального взноса
              <br />
              ФИО: Сватковский Ольга Анатолиевна | 375255467739 | 375256022344
              <br />
              Адрес доставки: {address}
              <br />
              <br />
              В заказе:
              <br />
              <ul>
                {!productInfo
                  ? "Пусто"
                  : productInfo.map((item, index) => {
                      return (
                        <li>
                          {index + 1}, {item.name} - {item.qty}шт -{item.price}{" "}
                          руб <br />
                        </li>
                      );
                    })}
              </ul>
              <br />
              - Доставка - 48 руб
              <br />
              Итоговая сумма заказа - {totalMoney} руб. <br />
              <br />
              Ожидайте пожалуйста, с Вами свяжутся специалисты банка для
              уточнения паспортных данных. <br />
              <br />
              Все данные верны?
              <br />
            </span>

            {/* <!-- Шаблон ИЗИКредит --> */}
            <span className="results">
              Спасибо за ожидание.
              <br />
              Ваш заказ №{order} оформлен.
              <br />
              Оформлен кредит в ИзиКредит на {month} мес, без первоначального
              взноса.
              <br />
              ФИО: ФИО
              <br />
              Адрес доставки: АДРЕС
              <br />
              В заказе:
              <br />
              - Доставка - руб
              <br />
              <ul>
                {!productInfo
                  ? "Пусто"
                  : productInfo.map((item, index) => {
                      return (
                        <li>
                          {index + 1}, {item.name} - {item.qty}шт -{item.price}{" "}
                          руб <br />
                        </li>
                      );
                    })}
              </ul>
              Итоговая сумма заказа - {totalMoney} руб.
              <br />
              Ожидайте, пожалуйста, с Вами свяжется специалист с банка для
              согласования всех данных <br />
              <br />
              Все данные верны?
              <br />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextDescriptions;
