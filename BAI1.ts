class KIEMTRA {
    sting: string;

    constructor(sting: string) {
        this.sting = sting;
    }

    split(data: string): any {
        return this.sting.split(" ");
    }

    check(): void {

        let arr = this.sting.split("")
        let defau = true;
        let fiststring = arr[0];
        let laststring = arr[arr.length - 1];
        while (fiststring != null && laststring != null) {
            if (fiststring == laststring) {
                if (arr.length == 0) {
                    true;
                } else {
                    let newst = arr.join("");
                    console.log(`ket qua tra ve ${newst}`);
                    break
                }
                defau = true;
            } else {
                defau = false;
                console.log("khong doi xung");
                break;
            }
        }
    }

}
let stack = new KIEMTRA('12321');
stack.check()