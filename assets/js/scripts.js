require("babel-core").transform("code", options);
import React from 'react';
import ReactDOM from 'react-dom';

const formulario = {
  <div class='row divAzul'>
    <div class='col-md-5 divNaranja agregados'>
      <input id="casualidad1"  size=46 name="casualidad">
    </div>
    <div class='col-md-3 divNaranja2 agregados'>
      <form>
        <input type='radio' name='gender' value='51'checked> 5&nbsp&nbsp
        <input type='radio' name='gender' value='41'> 4&nbsp&nbsp
        <input type='radio' name='gender' value='31'> 3&nbsp&nbsp
        <input type='radio' name='gender' value='21'> 2&nbsp&nbsp
        <input type='radio' name='gender' value='11'> 1
      </form>
    </div>
    <div class='col-md-3 divNaranja agregados'>
      <p class='text-center'>
        <select class='lista' name='sentimientos' style='width:205px;'>
          <option value='Tris1'>Tristeza</option>
          <option value='Aver1'>Aversión</option>
          <option value='Ira1'>Ira</option>
          <option value='Anti1'>Anticipación</option>
          <option value='Ale1'>Alegría</option>
          <option value='Confi1'>Confianza</option>
          <option value='Miedo1'>Miedo</option>
          <option value='Sor1'>Sorpresa</option>
        </p></select>
    </div>
  </div><br>
}

function agregarPanel(){
  ReactDOM.render(
    formulario,
    document.getElementById('agregado')
  )
}

/*
$(document).on('click', "#btAdd", function(){
  var html= "<div class='row divAzul'> <div class='col-md-5 divNaranja agregados'>"
        html+="<INPUT id=casualidad1  size=46 name=casualidad>"
    html+="</div>"
    html+="<div class='col-md-3 divNaranja2 agregados'>"
        html+="<form>"
          html+="<input type='radio' name='gender' value='51'checked> 5&nbsp&nbsp"
          html+="<input type='radio' name='gender' value='41'> 4&nbsp&nbsp"
          html+="<input type='radio' name='gender' value='31'> 3&nbsp&nbsp"
          html+="<input type='radio' name='gender' value='21'> 2&nbsp&nbsp"
          html+="<input type='radio' name='gender' value='11'> 1"
       html+="</form>"
    html+="</div>"
    html+="<div class='col-md-3 divNaranja agregados'>"
        html+="<p class='text-center'>"
          html+="<select class='lista' name='sentimientos' style='width:205px;'>"
            html+="<option value='Tris1'>Tristeza</option>"
            html+="<option value='Aver1'>Aversión</option>"
            html+="<option value='Ira1'>Ira</option>"
            html+="<option value='Anti1'>Anticipación</option>"
            html+="<option value='Ale1'>Alegría</option>"
            html+="<option value='Confi1'>Confianza</option>"
            html+="<option value='Miedo1'>Miedo</option>"
            html+="<option value='Sor1'>Sorpresa</option>"
          html+="</p></select>"
    html+="</div></div> <BR>"
  $('.agregado').append(html);
})*/
