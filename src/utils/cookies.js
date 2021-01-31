export function setCookie(name, value, days) {  //set name, value of token, length of expiration
  //set length of expiration
  var expires = "";
  if (days) 
  {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();//Transfrom from Date to String
  }
  //apply Cookie with given name
  document.cookie = name + "=" + (value || "") + expires + "; path=/; samesite=strict";
    //session_id={action.payload.user.token}; expires= {totaltime}; path=/; samesite=strict
}

export function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export function deleteCookie(name) {
  document.cookie = name + "=; path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
