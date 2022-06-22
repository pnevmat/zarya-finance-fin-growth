const headerButton = document.querySelector('[header-button]');
const youGetButton1 = document.querySelector('[you-get-button1]');
const youGetButton2 = document.querySelector('[you-get-button2]');
const consultantButton = document.querySelector('[consultant-button]');
const consultant2Button = document.querySelector('[consultant2-button]');
const participationButton = document.querySelector('[participation-button]');
const specialOfferButton = document.querySelector('[special-offer-button]');
const boostOfferButton = document.querySelector('[boost-offer-button]');

const headerModal = document.querySelector('[header-modal]');
const youGetModal = document.querySelector('[you-get-modal]');
const consultantModal = document.querySelector('[consultant-modal]');
const consultant2Modal = document.querySelector('[consultant2-modal]');
const participationModal = document.querySelector('[participation-modal]');
const specialOfferModal = document.querySelector('[special-offer-modal]');
const boostOfferModal = document.querySelector('[boost-offer-modal]');

headerButton.addEventListener('click', () => openModal('headerButton'));
youGetButton1.addEventListener('click', () => openModal('youGetButton'));
youGetButton2.addEventListener('click', () => openModal('youGetButton'));
consultantButton.addEventListener('click', () => openModal('consultantButton'));
consultant2Button.addEventListener('click', () =>
  openModal('consultant2Button'),
);
participationButton.addEventListener('click', () =>
  openModal('participationButton'),
);
specialOfferButton.addEventListener('click', () =>
  openModal('specialOfferButton'),
);
boostOfferButton.addEventListener('click', () => openModal('boostOfferButton'));

function openModal(button) {
  console.log('button in func', button);
  if (button === 'headerButton') {
    console.log('Header modal is open');
    headerModal.classList.remove('is-hiden');
  } else if (button === 'youGetButton') {
    console.log('You get modal is open');
    youGetModal.classList.remove('is-hiden');
  } else if (button === 'consultantButton') {
    consultantModal.classList.remove('is-hiden');
  } else if (button === 'consultant2Button') {
    consultant2Modal.classList.remove('is-hiden');
  } else if (button === 'participationButton') {
    participationModal.classList.remove('is-hiden');
  } else if (button === 'specialOfferButton') {
    specialOfferModal.classList.remove('is-hiden');
  } else if (button === 'boostOfferButton') {
    boostOfferModal.classList.remove('is-hiden');
  }
}
