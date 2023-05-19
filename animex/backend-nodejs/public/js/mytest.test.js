const set_options = require('./BattleField');
const { JSDOM } = require('jsdom');
const dom = new JSDOM();
global.document = dom.window.document;

arr = ['One Piece', 'Haikyuu', 'FullMetal Alchemist', 'Naruto','Eden Zero'];

test('set_options function properly assigns quizz game options to Player. i.e one correct answer and other extra options ', () => {
	
  document.body.innerHTML = '<div id="opt1"></div><div id="opt2"></div><div id="opt3"></div><div id="opt4"></div>';
  set_options('Death Note');

  const opt1InnerHTML = document.getElementById('opt1').innerHTML;
  const opt2InnerHTML = document.getElementById('opt2').innerHTML;
  const opt3InnerHTML = document.getElementById('opt3').innerHTML;
  const opt4InnerHTML = document.getElementById('opt4').innerHTML;

  expect(opt1InnerHTML).toMatch(/^[1-4]\. (Haikyuu|FullMetal Alchemist|Naruto|Eden Zero|Death Note)$/);
  expect(opt2InnerHTML).toMatch(/^[1-4]\. (Haikyuu|FullMetal Alchemist|Naruto|Eden Zero|Death Note)$/);
  expect(opt3InnerHTML).toMatch(/^[1-4]\. (Haikyuu|FullMetal Alchemist|Naruto|Eden Zero|Death Note)$/);
  expect(opt4InnerHTML).toMatch(/^[1-4]\. (Haikyuu|FullMetal Alchemist|Naruto|Eden Zero|Death Note)$/);
 
 
});