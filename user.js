$(document).ready(function(){
    $('.chat').click(function(event){
        $('.chatbox').toggleClass('active');
    });
    // $('.conv-form-wrapper').convform({selectInputStyle: 'disable'});
    $('.conv-form-wrapper').convform({
        eventList: {
            onSubmitForm: function(convState) {
                console.log('The form is being submitted!');
                convState.form.submit();
            }
        }
      });
    // $('.conv-form-wrapper').convform();
})