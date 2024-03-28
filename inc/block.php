<?php
class BPPBHelloBlock{
	public function __construct(){
		add_action( 'init', [$this, 'onInit'] );
	}
	function onInit() {
		wp_register_style('bbpb-fontawesome-all','https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css',[],'6.4.2');
		wp_register_style( 'bppb-hello-style', BPPB_DIR_URL . 'dist/style.css', ['bbpb-fontawesome-all'], BPPB_VERSION ); // Style
		wp_register_style( 'bppb-hello-editor-style', BPPB_DIR_URL . 'dist/editor.css', [ 'bppb-hello-style' ], BPPB_VERSION ); // Backend Style

		register_block_type( __DIR__, [
			'editor_style'		=> 'bppb-hello-editor-style',
			'render_callback'	=> [$this, 'render']
		] ); // Register Block

		wp_set_script_translations( 'bppb-hello-editor-script', 'b-blocks', BPPB_DIR_PATH . 'languages' );
	}

	function render( $attributes ){
		extract( $attributes );

		wp_enqueue_style( 'bppb-hello-style' );
		wp_enqueue_script( 'bppb-hello-script', BPPB_DIR_URL . 'dist/script.js', [ 'react', 'react-dom' ], BPPB_VERSION, true );
		wp_set_script_translations( 'bppb-hello-script', 'b-blocks', BPPB_DIR_PATH . 'languages' );

		$className = $className ?? '';
		$blockClassName = "wp-block-bppb-hello $className align$align";

		ob_start(); ?>
		<div class='<?php echo esc_attr( $blockClassName ); ?>' id='bppb-table-of-contents-<?php echo esc_attr( $cId ) ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>

		<?php return ob_get_clean();
	}
}
new BPPBHelloBlock();
