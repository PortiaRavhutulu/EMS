$('#myTable').dataTable( {
    ajax:           '/api/data',
    scrollY:        200,
    deferRender:    true,
    scroller:       true
} );