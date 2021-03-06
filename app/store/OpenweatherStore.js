/*
 * File: app/store/OpenweatherStore.js
 *
 * This file was generated by Sencha Architect version 3.5.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('WeatherApp.store.OpenweatherStore', {
    extend: 'Ext.data.Store',

    requires: [
        'WeatherApp.model.WeatherModel',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoDestroy: true,
            storeId: 'OpenweatherStore',
            autoLoad: false,
            model: 'WeatherApp.model.WeatherModel',
            proxy: {
                type: 'jsonp',
                url: 'http://api.openweathermap.org/data/2.5/weather?appid=2be8bbab865e318bc88171f1b08a6ade&units=metric',
                reader: {
                    type: 'json'
                }
            }
        }, cfg)]);
    }
});