<template>
   <div class="container mt-4">
        <div class="row">
            <div class="col-md-12">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#contacts" type="button" role="tab" aria-controls="home" aria-selected="true">
                            Контактная информация
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" ref="shipping_item" id="shipping-tab" data-bs-toggle="tab" data-bs-target="#shipping" type="button" role="tab" aria-controls="shipping" aria-selected="false">
                            Доставка
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" ref="payment_item" id="payment-tab" data-bs-toggle="tab" data-bs-target="#payments" type="button" role="tab" aria-controls="contact" aria-selected="false">
                            Оплата
                        </button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="contacts" role="tabpanel" aria-labelledby="home-tab">
                        <div class="register-form">
                            <div class="row mt-5">
                                <div class="col-md-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" value="1" id="type0">
                                        <label class="form-check-label" for="type0">
                                            Физ. лицо
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" value="2" id="type1">
                                        <label class="form-check-label" for="type1">
                                            Юр. лицо
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <!-- <template v-if="form.legal_status == 2"> -->
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group mt-5">
                                            <input
                                               
                                                type="text"
                                                class="form-control"
                                            
                                                placeholder="Название организации"
                                            >
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group mt-5">
                                            <input
                                           
                                                type="text"
                                                class="form-control"
                                             
                                                placeholder="Юр. адрес"
                                            >
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group mt-5">
                                            <input
                                               
                                                type="text"
                                                class="form-control"
                                              
                                                placeholder="ОГРН/ОГРНИП"
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group mt-5">
                                            <input
                                      
                                                type="text"
                                                class="form-control"
                                           
                                                placeholder="ИНН"
                                            >
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group mt-5">
                                            <input
                                           
                                                type="text"
                                                class="form-control"
                                                placeholder="КПП"
                                            >
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group mt-5">
                                            <input  type="text" class="form-control" placeholder="Расчетный счет">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group mt-5">
                                            <input  required type="text" class="form-control" placeholder="Корреспондентский счет">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group mt-5">
                                            <input  required type="text" class="form-control" placeholder="БИК">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group mt-5">
                                            <input  required type="text" class="form-control" placeholder="Банк">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group mt-5">
                                            <input  required type="text" class="form-control" placeholder="Генеральный директор">
                                        </div>
                                    </div>
                                </div>
                            <!-- </template> -->

                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group mt-5">
                                        <input
                                     
                                            type="text"
                                            class="form-control"
                                    
                                            placeholder="Фамилия"
                                        />
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group mt-5">
                                        <input
                                       
                                            type="text"
                                            class="form-control"
                                     
                                            placeholder="Имя"
                                        >
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group mt-5">
                                        <input
                                           
                                            type="text"
                                            class="form-control"
                                    
                                            placeholder="Отчество"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group mt-5">
                                        <input
                                          
                                            type="text"
                                            class="form-control"
                                   
                                            placeholder="Телефон"
                                        >
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group mt-5">
                                        <input
                                         
                                            type="text"
                                            class="form-control"
                                      
                                            placeholder="E-mail"
                                        >
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group mt-5">
                                        <input
                                
                                            type="text"
                                            class="form-control"
                                      
                                            placeholder="Город"
                                        >
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group mt-5">
                                        <select
                                          
                                            class="form-control"
                                        
                                        >
                                            <option selected>Регион</option>
                                            <option >
                                                region
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group mt-5">
                                        <select  class="form-control">
                                            <option value="2">Россия</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group mt-5">
                                        <input
                                   
                                            type="text"
                                            class="form-control"
                                      
                                            placeholder="Желаемая транспортная компания (для регионов)"
                                        >
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group mt-5">
                                        <select
                                          
                                            class="form-control"
                                           
                                        >
                                            <option selected>Тип места продажи товара</option>
                                            <option>Зоомагазин (Торговая точка)</option>
                                            <option>Интернет магазин</option>
                                            <option>Зоосалон</option>
                                            <option>Питомник</option>
                                            <option>Сеть магазинов</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-5">
                                <button class="button" type="submit">Далее</button>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="shipping" role="tabpanel" aria-labelledby="shipping-tab">
                        <div class="register-form">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group mt-5">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" id="flexRadioDefault`">
                                            <label class="form-check-label" for="flexRadioDefault">
                                              title
                                                <div class="text-muted">desc</div>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="mt-5">
                                        <button class="button" type="submit">Далее</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="payments" role="tabpanel" aria-labelledby="payment-tab">
                        <div class="register-form">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group mt-5">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" id="flexDefault">
                                            <label class="form-check-label" for="flexDefault">
                                                title
                                                <div class="text-muted">desc</div>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="mt-5">
                                        <button
                                        
                                            class="button"
                                  
                                            type="submit">Сохранить данные</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
      
  <script>
//   import { mapActions } from "vuex";
export default {
  name: "hetts-account-edit",
  components: {},
};
</script>