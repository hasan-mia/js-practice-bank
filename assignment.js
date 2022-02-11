//
//
// 4) oddFriend: TypeError❗ - Cannot read property 'length'
// of undefined.When we call the
// function using the array["ab", "bc", "ca"], by using 0 <= arr.length;
// the loop runs 4 times instead of 3. So the 4 th element returns "undefined".
// There is no "length" property for undefined.
// That 's why your code crushed. Next time use "<" instead of "<="

/* ৪. [ ফাংশন নেম দিতে হবে oddFriend] */
function oddFriend(friendlist) {
    // let friendsLength = friendlist[0].length;
    let myfriend = friendlist[0];
    for (let i = 0; i < friendlist.length; i++) {
        if (typeof(friendlist[i]) == 'number') {
            return 'Please do not add number';
        }
        if ((friendlist[i].length % 2) != 0) {
            // friendsLength = friendlist[i].length;
            myfriend = friendlist[i];
            break;
        }
    }
    if ((myfriend.length % 2) == 0) {
        return 'We do not found odd number friend in array';
    }
    return myfriend //+'\nTotal latter number is: ' + friendsLength;
}
const friendList = ['Barsha', 'Soya', 'Jarin Akter', 'Nahid', 'Sumaiya Shimu', 'Hasan'];
// const friendList = [2, 3, 4, 5];
const oddFriendResult = oddFriend(friendList)
console.log(oddFriendResult);