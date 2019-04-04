function maskedinput() {
    let maskFirst = document.querySelector('#mask1'),
        maskSecond = document.querySelector('#mask2'),
        maskThird = document.querySelector('#mask3');

    maskFirst.addEventListener('keyup', function () {
        mask('mask1', '+7(000)000-00-00', event);
    });
    maskSecond.addEventListener('keyup', function () {
        mask('mask2', '+7(000)000-00-00', event);
    });
    maskThird.addEventListener('keyup', function () {
        mask('mask3', '+7(000)000-00-00', event);
    });


    function mask(inputName, mask, evt) {
        console.log("159159");
        try {
            var text = document.getElementById(inputName);
            var value = text.value;
            // If user pressed DEL or BACK SPACE, clean the value
            try {
                var e = (evt.which) ? evt.which : event.keyCode;
                if (e == 46 || e == 8) {
                    text.value = "";
                    return;
                }
            } catch (e1) {}
            var literalPattern = /[0\*]/;
            var numberPattern = /[0-9]/;
            var newValue = "";
            for (var vId = 0, mId = 0; mId < mask.length;) {
                if (mId >= value.length)
                    break;
                // Number expected but got a different value, store only the valid portion
                if (mask[mId] == '0' && value[vId].match(numberPattern) == null) {
                    break;
                }

                // Found a literal
                while (mask[mId].match(literalPattern) == null) {
                    if (value[vId] == mask[mId])
                        break;
                    newValue += mask[mId++];
                }
                newValue += value[vId++];
                mId++;
            }
            text.value = newValue;
        } catch (e) {}
    }

}

module.exports = maskedinput;