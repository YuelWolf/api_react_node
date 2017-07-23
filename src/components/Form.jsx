const Form = (props) => (
  <div class='row divAzul'>
    <div class='col-md-5 divNaranja agregados'>
      <input id="casualidad1" size={46}name="casualidad" />
    </div>
    <div class='col-md-3 divNaranja2 agregados'>
      <form>
        <input type='radio' name='gender' value='51'checked /> 5&nbsp&nbsp
        <input type='radio' name='gender' value='41' /> 4&nbsp&nbsp
        <input type='radio' name='gender' value='31' /> 3&nbsp&nbsp
        <input type='radio' name='gender' value='21' /> 2&nbsp&nbsp
        <input type='radio' name='gender' value='11' /> 1
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
        </select>
      </p>
    </div>
  </div>
);

export default Form;
