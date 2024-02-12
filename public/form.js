const formElement = document.querySelector('form');
formElement.addEventListener('submit', verifyUser);

function verifyUser(event){
  event.preventDefault();
  const formData = new FormData(event.target);
  const userName = formData.get('username');
  const password = formData.get('password');
  if (userName != "김덕만" || password != "과거로시간여행"){
    alert('사용자명이나 비밀번호를 다시 한번 확인해주세요.');
    return false;
  }
  location.href = 'result.html';
  return true;
}
