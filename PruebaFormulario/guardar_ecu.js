var save = document.createElement('a');
save.href = $('#output').attr('src');
save.target = '_blank';
save.download = 'photo.jpg'

var event = document.createEvent('Event');
event.initEvent('click', true, true);
save.dispatchEvent(event);
(window.URL || window.webkitURL).revokeObjectURL(save.href);