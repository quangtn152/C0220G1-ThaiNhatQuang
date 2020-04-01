class Customer {
    constructor(name, cmnd, birthday, email, address, serviceType, rentDays, discount, customerType, roomType, followedPeople) {
        this.name = name;
        this.cmnd = cmnd;
        this.birthday = birthday;
        this.email = email;
        this.address = address;
        this.serviceType = serviceType;
        this.rentDays = rentDays;
        this.discount = discount;
        this.customerType = customerType;
        this.roomType = roomType;
        this.followedPeople = followedPeople;
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name;
    }

    getCmnd() {
        return this.cmnd
    }

    setCmnd(cmnd) {
        let check = false;
        do {
            let regExp = /^[1-9]{1}[0-9]{8}$/;
            if (!regExp.test(cmnd)) {
                alert("Bạn nhập sai cú pháp mời nhập lại")
                cmnd = prompt("Nhap CMND: ");
            } else check = true;
        } while (!check);
        this.cmnd = cmnd;
    }

    getBirthday() {
        return this.birthday
    }

    setBirthday(birthday) {
        let check = false;
        do {
            let regExp = /^(0?[1-9]|[1-2][0-9]|3[0-1])\/(0?[1-9]|1[0-2])\/19([0-9]{2})$/;
            if (!regExp.test(birthday)) {
                alert("Bạn nhập sai cú pháp mời nhập lại")
                birthday = prompt("birthday:");
            } else check = true;
        } while (!check);
        this.birthday = birthday;
    }

    getEmail() {

        return this.email
    }

    setEmail(email) {
        let check = false;
        do {
            let regExp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
            if (!regExp.test(email)) {
                alert("Bạn nhập sai cú pháp mời nhập lại")
                email = prompt("Nhap Email:");
            } else check = true;
        } while (!check);
        this.email = email;

    }

    getAddress() {
        return this.address
    }

    setAddress(address) {
        this.address = address;
    }

    getServiceType() {
        return this.serviceType
    }

    setServiceType(serviceType) {
        this.serviceType = serviceType;
    }

    getRentDays() {
        return this.rentDays
    }

    setRentDays(rentDays) {
        let check = false;
        do {
            let regExp = /^[1-9]+\d*$/;
            if (!regExp.test(rentDays)) {
                alert("Bạn nhập sai cú pháp mời nhập lại")
                rentDays = prompt("rentDays: ");
            } else check = true;
        } while (!check);
        this.rentDays = rentDays;
    }

    getDiscount() {
        return this.discount
    }

    setDiscount(discount) {
        let check = false;
        do {
            let regExp = /^[1-9]+\d*$/;

            if (!regExp.test(discount)) {
                alert("Bạn nhập sai cú pháp mời nhập lại")
                discount = prompt("discount: ");
            } else check = true;
        } while (!check);
        this.discount = discount;
    }

    getCustomerType() {
        return this.customerType
    }

    setCustomerType(customerType) {
        this.customerType = customerType;
    }

    getRoomType() {
        return this.roomType
    }

    setRoomType(roomType) {
        this.roomType = roomType;
    }

    getFollowedPeople() {
        return this.followedPeople
    }

    setFollowedPeople(followedPeople) {
        let check = false;
        do {
            let regExp = /^[1-9]+\d*$/;

            if (!regExp.test(followedPeople)) {
                alert("Bạn nhập sai cú pháp mời nhập lại")
                followedPeople = prompt("Nguoi di theo:: ");
            } else check = true;
        } while (!check);
        this.followedPeople = followedPeople;
    }

    totalPrice() {
        let totalPrice = 0;
        if (this.serviceType === "villa") {
            totalPrice = 500 * this.rentDays * (1 - this.discount / 100);
        } else if (this.serviceType === "house") {
            totalPrice = 300 * this.rentDays * (1 - this.discount / 100);
        } else {
            totalPrice = 100 * this.rentDays * (1 - this.discount / 100);
        }
        this.totalPrice = totalPrice;
        return this.totalPrice
    }

    // totalPrice() {
    //     let roomCost;
    //     if(this.serviceType==='villa') {
    //         roomCost=500
    //     } else if(this.serviceType==='house') {
    //         roomCost=300
    //     } else {roomCost=100};
    //     return this.totalPrice=roomCost*this.rentDays*(1-this.discount/100);
    // };
}