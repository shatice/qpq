if (typeof party !== 'undefined') {
  console.log('PAR ICI')
  console.log(party);
  localStorage.setItem(location.href, party.name);
}