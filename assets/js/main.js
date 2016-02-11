// human readable dates
$('.timeago').each(function() {
	moment.locale('es');
	$(this).text(moment($(this).attr('datetime')).fromNow());
});
$('.x-slider-collaborators__slideshow').cycle();