var KIEMTRA = /** @class */ (function () {
    function KIEMTRA(sting) {
        this.sting = sting;
    }
    KIEMTRA.prototype.split = function (data) {
        return this.sting.split(" ");
    };
    KIEMTRA.prototype.check = function () {
        var arr = this.sting.split("");
        var defau = true;
        var fiststring = arr[0];
        var laststring = arr[arr.length - 1];
        while (fiststring != null && laststring != null) {
            if (fiststring == laststring) {
                if (arr.length == 0) {
                    true;
                }
                else {
                    var newst = arr.join("");
                    console.log("ket qua tra ve ".concat(newst));
                    break;
                }
                defau = true;
            }
            else {
                defau = false;
                console.log("khong doi xung");
            }
        }
    };
    return KIEMTRA;
}());
var stack = new KIEMTRA('12345654321');
stack.check();
