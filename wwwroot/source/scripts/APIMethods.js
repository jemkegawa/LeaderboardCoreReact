var serviceErrorMessage = '';

function APIGet(serviceURI, method, successFunction, failFunction) {
    serviceErrorMessage = '';

    //AJAX request
    $.getJSON(serviceURI + method)
        .done(function (data) {
            if (data == null) {
                failFunction('');
                return;
            }
            else {
                successFunction(data);
            }
        })
        .fail(function (jqXHR, textStatus, err) {
            failFunction(err + ': ' + textStatus);
            return;
        });
}

function APIPost(serviceURI, method, jsonData, successFunction, failFunction, successParameter) {
    serviceErrorMessage = '';

    if (jsonData == {}) {
        //AJAX post
        $.ajax({
            type: "POST",
            url: serviceURI + method,
            dataType: "json",
            success: function (data) {
                //ensure that a 405 (Method Not Allowed) or similar server error that produces a successful response was not returned
                if (data == null) {
                    failFunction('');
                }
                else {
                    //run passed in success message upon completion
                    successFunction(data, successParameter);
                }
            },
            error: function (message) {
                if (message == 'success') {
                    successFunction(message, successParameter);
                    return;
                }
                failFunction(message);
                serviceErrorMessage = message;
                return null;
            }
        });
    }
    else {
        //AJAX post
        $.ajax({
            type: "POST",
            url: serviceURI + method,
            data: JSON.stringify(jsonData),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                //ensure that a 405 (Method Not Allowed) or similar server error that produces a successful response was not returned
                if (data == null) {
                    failFunction('');
                }
                else {
                    //run passed in success message upon completion
                    successFunction(data, successParameter);
                }
            },
            error: function (message) {
                if (message == 'success') {
                    successFunction(message, successParameter);
                    return;
                }
                failFunction(message);
                serviceErrorMessage = message;
                return null;
            }
        });
    }
}

function APIGetWebMethod(serviceURI, method, jsonData, successFunction, failFunction) {
    serviceErrorMessage = '';

    //AJAX post
    $.ajax({
        type: "GET",
        url: serviceURI + method,
        data: JSON.stringify(jsonData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            data = $.parseJSON(data.d);

            //ensure that a 405 (Method Not Allowed) or similar server error that produces a successful response was not returned
            if (data == null) {
                return null;
            }
            else {
                //run passed in success message upon completion
                successFunction(data);
            }
        },
        error: function (message) {
            failFunction(message);
            serviceErrorMessage = message;
            return null;
        }
    });
}