import React, { useState } from 'react';

import Contact from './Contact';

import './Contacts.css';

import femaleIcon from '../icons/woman.svg';
import maleIcon from '../icons/man.svg';
import itIcon from '../icons/user.svg';

const telContacts = [
  {
    firstName: 'Барней',
    lastName: 'Стинсовський',
    phone: '+380956319521',
    gender: 'male',
    id: 1,
  },
  {
    firstName: 'Робін',
    lastName: 'Щербатська',
    phone: '+380931460123',
    gender: 'female',
    id: 2,
  },
  {
    firstName: 'Анонімний',
    lastName: 'Анонімус',
    phone: '+380666666666',
    gender: 'undefined',
    id: 3,
  },
  {
    firstName: 'Лілія',
    lastName: 'Олдровна',
    phone: '+380504691254',
    gender: 'female',
    id: 4,
  },
  {
    firstName: 'Маршен',
    lastName: 'Еріксонян',
    phone: '+380739432123',
    gender: 'male',
    id: 5,
  },
  {
    firstName: 'Теодор',
    lastName: 'Мотсбес',
    phone: '+380956319521',
    gender: 'male',
    id: 6,
  },
];

const Contacts = () => {
  const [male, setMale] = useState(true);
  const [female, setFemale] = useState(true);
  const [it, setIt] = useState(true);
  const [search, setSearch] = useState('');

  const fTemp = [];
  const mTemp = [];
  const itTemp = [];

  telContacts.map((el) => {
    if (male && el.gender === 'male') {
      mTemp.push(el);
    }
    if (female && el.gender === 'female') {
      fTemp.push(el);
    }
    if (it && el.gender === 'undefined') {
      itTemp.push(el);
    }
  });
  let temp = [...fTemp, ...mTemp, ...itTemp].sort((a, b) =>
    a.lastName > b.lastName ? 1 : -1
  );

  if (search.trim()) {
    temp = temp.filter((item) => {
      return (
        item.firstName.toLowerCase().includes(search) ||
        item.lastName.toLowerCase().includes(search) ||
        item.phone.includes(search)
      );
    });
  }

  const setUserIcon = (gender) => {
    if (gender === 'female') {
      return femaleIcon;
    } else if (gender === 'male') {
      return maleIcon;
    } else {
      return itIcon;
    }
  };

  const searchHandler = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const switchMale = () => {
    setMale((male) => !male);
  };

  const switchFemale = () => {
    setFemale((female) => !female);
  };

  const switchIt = () => {
    setIt((it) => !it);
  };

  return (
    <div className="all-contacts">
      <input
        type="search"
        className="search"
        value={search}
        placeholder="Type name to search..."
        onChange={searchHandler}
      />
      <div className="checks">
        <div>
          <input
            type="checkbox"
            name="male"
            id="male"
            defaultChecked
            onChange={switchMale}
          />
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="female"
            id="female"
            defaultChecked
            onChange={switchFemale}
          />
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="undefined"
            id="undefined"
            defaultChecked
            onChange={switchIt}
          />
          <label htmlFor="undefined">It</label>
        </div>
      </div>

      {temp.map((contact, index) => (
        <Contact
          firstName={contact.firstName}
          lastName={contact.lastName}
          gender={setUserIcon(contact.gender)}
          phone={contact.phone}
          key={index}
        />
      ))}
    </div>
  );
};

export default Contacts;
