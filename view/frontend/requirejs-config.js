var config = {
    config: {
        mixins: {
            'Magento_ConfigurableProduct/js/configurable': {
                'CycleMotion_DynamicName/js/model/attswitch': true
            },
            'Magento_Swatches/js/swatch-renderer': {
                'CycleMotion_DynamicName/js/model/swatch-attswitch': true
            }
        }
    }
};