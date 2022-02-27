import React from "react";

export default function Registr() {
  return (
    <div>
      <div class="head">
        <h1>Bepul CRM uchun tez ro'yxatdan o'ting</h1>
        <p class="p1">Bugunoq NafCRMdan foydalanishni boshlang </p>
      </div>
      <div class="registr">
        <div class="row">
          <div class="col-5">
          <input type="text" class="form-control" placeholder="Name" />
          </div>
          <div class="col-5">
          <input type="text" class="form-control" placeholder="Email" />
          </div>
          <div class="col-5">
          <input type="text" class="form-control" placeholder="Phone" />
          </div>
          <div class="col-5">
          <input type="text" class="form-control" placeholder="Company Name" />
          </div>
          <div class="botn">
            <button class="btnn btn-primary">Yuborish</button>
          </div>
        </div>
      </div>
    </div>
  );
}
