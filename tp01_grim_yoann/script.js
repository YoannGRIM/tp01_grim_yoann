$(function() {
    $("form[name='registration']").validate({
      rules: {
        password: {
          required: true,
          minlength: 5
        },
        "confirm-password": {
          equalTo: "#password"
        }
      },
      messages: {
        "confirm-password": {
          equalTo: "Les mots de passe ne sont pas identiques"
        }
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
});