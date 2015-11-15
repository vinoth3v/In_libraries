require.config({
    baseUrl: '/files/libraries',
    paths: {
		In : '/files/assets/js/In',
		In_ws : '/files/assets/js/ws',
		jQuery : 'jquery/jquery-1.11.3.min',
		jquery : 'jquery/jquery-1.11.3.min',
		ready : 'domready/ready.min',
		once : 'jquery.once/jquery.once',
		jQuery_form : 'jquery.form/jquery.form.min',
		react : 'react-0.13.1/build/react.min',
		backbone : 'backbone/backbone-1.1.2.min',
		uikit : 'uikit-2.22.0/dist/js/uikit.min',
		socketio : 'socket.io/socket.io.min',
		sockjs : 'sockjs/dist/sockjs',
		selectize : 'selectize.js/dist/js/standalone/selectize.min',
		underscore : 'underscore/underscore-min',
		'ckeditor-core' : 'ckeditor_4.5.1/ckeditor',
		'ckeditor-jquery' : 'ckeditor_4.5.1/adapters/jquery'
    },
    config: {
        uikit: {
            base : 'uikit-2.22.0/dist/js'
        }
    },
    shim: {
		'ckeditor-jquery' : {
			deps : ['jQuery', 'ckeditor-core']
		},
		uikit : {
			deps : ['jQuery']
		},
		In : {
			deps : ['jQuery', 'uikit', 'once', 'jQuery_form',  'uikit!notify']
		},
		In_ws : {
			deps : ['In']
		},
	},
});
