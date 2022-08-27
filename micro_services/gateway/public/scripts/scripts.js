window.addEventListener('DOMContentLoaded', async () => {
  const getReviews = async () => {
      const reviews = (await fetch('/reviews').then((res) => res.json())) || [];
      console.log(reviews);
  }
  await getReviews();

  const getMessages = async () => {
    const messages = (await fetch('/messages').then((res) => res.json())) || [];
    console.log(messages);
}
await getMessages();

const connectSocket = () => {
  const socket = io('ws://localhost:3000');
  socket.on('add_mess', (data) => {
    const chat = document.getElementById('all_mess');
    const mess = document.createElement('div');
    mess.className = "new-message";
    mess.innerHTML = `<span>${data.author}   ${data.time}   ${data.message}</span>`;
    chat.append(mess);
  });
  const input = document.getElementById('send-message');
  input.addEventListener('click', () => {
    const message = document.getElementById('message');
    const name = localStorage.getItem('email') || '"Аноним"';
    const author = name.split('"')[1];
    socket.emit('send_mess', { message: message.value, author: author });
    message.value = '';
  });
}

connectSocket();

})

const addNewUser = async () => {
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const user = {
      name: name,
      email: email,
      password: password
    };
    if (user.name === '' || user.email === '' || user.password === '') {
      alert('Введите корректные данные!');
      location.reload();
    } else {
      await fetch('/reg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then(response => response.json())
        .then(data => {
          if (data.code) {
            alert('Введите корректные данные!');
            location.reload();
          } else {
            alert('Регистрация прошла успешно!')}
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  const getTokenData = async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const user = {
      email: email,
      password: password
    };
    if (user.email === '' || user.password === '') {
      alert('Введите корректные данные!');
      location.reload();
    } else {
    await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => {
        if (data.code) {
          alert('Введите корректные данные!');
          location.reload();
        } else {
          alert('Вход успешный]!');
          localStorage.setItem('token', JSON.stringify(data));
          localStorage.setItem('email', JSON.stringify(user.email));
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }

formElem.onsubmit = async (e) => {
      e.preventDefault();
    const token = localStorage.getItem('token');
    const string = token.split(':')[1].split('"')[1];
    try {
      await fetch('/image/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${string}`
        },
        body: new FormData(formElem)
      });
      alert('Фото загружено!');
    } catch {
      console.error(error);
    }
    location.reload();
}