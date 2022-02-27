import React from "react";

export default function Main() {
  return (
    <div className="main">
      <div>
        <h1>U qanday ishlaydi?</h1>
        <p>
          CRM jarayonlarni avtomatlashtirish orqali xaridor bilan samaraliroq
          muloqot o'rnatishga,
          <br /> ishdagi xatolardan qochishga va natijada unga ko'proq sotishga
          yordam beradi.
        </p>
      </div>

      <div class="ct">
        <div class="row">
          <div class="col">
            <img src="../../../img/v-1.png" width="68px" height="56px" />
            <p class="v1">Mijozlar uchun buxgalteriya hisobi (mijoz bazasi)</p>
          </div>
          <div class="col">
            <img src="../../../img/v-2.png" width="68px" height="56px" />
            <p class="v2">Loyiha boshqaruvi</p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <img src="../../../img/v-3.png" width="60px" height="56px" />
            <p class="v3">Xodimlarni boshqarish</p>
          </div>
          <div class="col">
            <img src="../../../img/v-4.png" width="55px" height="56px" />
            <p class="v3">Hujjatlar oqimi</p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <img src="../../../img/v-5.png" width="60px" height="56px" />
            <p class="v4">Buxgalteriya hisobi va ombor hisobi</p>
          </div>
          <div class="col">
            <img src="../../../img/v-6.png" width="60px" height="56px" />
            <p class="v4">O'rnatilgan kommunikatsiyalar</p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <img src="../../../img/v-7.png" width="60px" height="56px" />
            <p class="v4">Sayt boshqaruvi</p>
          </div>
          <div class="col">
            <img src="../../../img/v-8.png" width="60px" height="56px" />
            <p class="v4">Yakuniy tahlil</p>
          </div>
        </div>
      </div>

      <div class="ct2">
        <div class="text">
          <h1>Dasturda ishlashning oddiy bosqichlari</h1>
          <p>
            Bu ketma ketliklarni bajarish orqali biznesingizni yuqori darajada
            o'sishiga yordam bering
          </p>
        </div>
        <div class="con">
          <div class="row row-cols-5">
            <div class="col1">
              <div class="img">
                <img src="../../../img/icon1.png" width="25px" height="32px" />
              </div>
              <h1 class="lar">01</h1>
              <h1 class="sm1">Ro'yhatdan o'tish</h1>
              <span class="sm2">
                Dastur 7 kun davomida
                <br /> bepul bo'ladi
              </span>
            </div>
            <div class="col2">
              <div class="img">
                <img src="../../../img/icon2.png" width="35px" height="32px" />
              </div>
              <h1 class="lar">02</h1>
              <h1 class="sm11">Xodimlarni qo'sh</h1>
              <span class="sm2">
                Ularning elektron pochta manzillarini ko'rsatgan holda
              </span>
            </div>
            <div class="col1">
              <div class="img">
                <img src="../../../img/icon3.png" width="35px" height="32px" />
              </div>
              <h1 class="lar">03</h1>
              <h1 class="sm11">Tizimga kiring</h1>
              <span class="sm2">
                Mijozlar, hujjatlar, loyihalar, buyurtmalar bilan ishlang
              </span>
            </div>
            <div class="col1">
              <div class="img">
                <img src="../../../img/icon4.png" width="35px" height="32px" />
              </div>
              <h1 class="lar">04</h1>
              <h1 class="sm11">Hisobot tahlil qilish</h1>
              <span class="sm2">Kompaniya taraqqiyotini kuzatib boring</span>
            </div>
          </div>
        </div>

        {/* <div className="registr"></div> */}
      </div>
    </div>
  );
}
