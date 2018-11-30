$(document).ready(function() {

  $('#btnSend').click(function() {

    var errores = '';

    // Validado Nombre ==============================
    if ($('#names').val() == '') {
      errores += '<p>Escriba un nombre</p>';
      $('#names').css("border-bottom-color", "#F14B4B")
    } else {
      $('#names').css("border-bottom-color", "#d1d1d1")
    }

    // Validado Correo ==============================
    if ($('#email').val() == '') {
      errores += '<p>Ingrese un correo</p>';
      $('#email').css("border-bottom-color", "#F14B4B")
    } else {
      $('#email').css("border-bottom-color", "#d1d1d1")
    }

    // Validado Mensaje ==============================
    if ($('#mensaje').val() == '') {
      errores += '<p>Escriba su nivel de java</p>';
      $('#mensaje').css("border-bottom-color", "#F14B4B")
    } else {
      $('#mensaje').css("border-bottom-color", "#d1d1d1")
    }

    // Validado Mensaje ==============================
    if ($('#Last_name').val() == '') {
      errores += '<p>Escriba su apellidos</p>';
      $('#Last_name').css("border-bottom-color", "#F14B4B")
    } else {
      $('#Last_name').css("border-bottom-color", "#d1d1d1")
    }

    // Validado Mensaje ==============================
    if ($('#phone').val() == '') {
      errores += '<p>Escriba un telefono</p>';
      $('#phone').css("border-bottom-color", "#F14B4B")
    } else {
      $('#phone').css("border-bottom-color", "#d1d1d1")
    }

    // Validado Mensaje ==============================
    if ($('#english_level').val() == '') {
      errores += '<p>Escriba un nivel de ingles</p>';
      $('#english_level').css("border-bottom-color", "#F14B4B")
    } else {
      $('#english_level').css("border-bottom-color", "#d1d1d1")
    }

    // Validado Mensaje ==============================
    if ($('#career').val() == '') {
      errores += '<p>Escriba un carrera</p>';
      $('#career').css("border-bottom-color", "#F14B4B")
    } else {
      $('#career').css("border-bottom-color", "#d1d1d1")
    }

    // Validado Mensaje ==============================
    if ($('#semester').val() == '') {
      errores += '<p>Escriba su semestre</p>';
      $('#semester').css("border-bottom-color", "#F14B4B")
    } else {
      $('#semester').css("border-bottom-color", "#d1d1d1")
    }




    // ENVIANDO MENSAJE ============================
    if (errores == '' == false) {
      var mensajeModal = '<div class="modal_wrap">' +
        '<div class="mensaje_modal">' +
        '<h3>Errores encontrados</h3>' +
        errores +
        '<span id="btnClose">Cerrar</span>' +
        '</div>' +
        '</div>'

      $('body').append(mensajeModal);
    } else {
      $.post('https://salesforcewebsiteapi.herokuapp.com/api/students', {
        firstName: $('#names').val(),
        lastName: $('#Last_name').val(),
        phone: $('#phone').val(),
        email: $('#email').val(),
        englishLevel: $('#english_level').val(),
        collegeCareer: $('#career').val(),
        semester: $('#semester').val(),
        javaKnowledge: $('#level_java').val()
      }).done((data)=>{
        $('#form_students')[0].reset();
        console.log(data);
      }).fail((data)=>{
        console.log(data);
      });
    }

    // CERRANDO MODAL ==============================
    $('#btnClose').click(function() {
      $('.modal_wrap').remove();
    });
  });

});
