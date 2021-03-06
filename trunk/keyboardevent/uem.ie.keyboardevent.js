// http://www.w3.org/TR/2003/NOTE-DOM-Level-3-Events-20031107/events.html#Events-KeyboardEvent
// See trunk/uem.keyboardevent.identifiertable.js for notes on keyboard events

if (document.createEventObject) {
  // Constructor
  /*@cc_on
  function KeyboardEvent() {
    this.altKey = null;
    this.ctrlKey = null;
    this.keyIdentifier = null;
    this.keyLocation = null;
    this.metaKey = null;
    this.shiftKey = null;
    this.detail = undefined;
    // Carry keycode for the case where the code does not load the keyboard event maps.
    this.keycode = undefined;
  }
  @*/
  // Inherit from UIEvent
  KeyboardEvent.prototype = new UIEvent();
  // Reset constructor
  KeyboardEvent.prototype.constructor = KeyboardEvent;

  // Constants
  KeyboardEvent.DOM_KEY_LOCATION_STANDARD = 0;
  KeyboardEvent.DOM_KEY_LOCATION_LEFT = 1;
  KeyboardEvent.DOM_KEY_LOCATION_RIGHT = 2;
  KeyboardEvent.DOM_KEY_LOCATION_NUMPAD = 3;

  // Methods
  /**
   * Initialize an event object.  Keyword 'this' is an event object.
   * 
   * @param type {String} Event type.
   * @param canBubble Boolean that determines if the event propagates.
   * @param cancelable Boolean that determines if the event can be cancelled.
   * @param view The view from which the event was generated.
   * @param keyIdentifier Identifier of the key.
   * @param keyLocation The key location.  Some keys, the CTRL keys or numeric
   * keys, can be generated from more than one location on the keyboard.
   * @param modifiersList A white space separated list of modifier key
   * identifiers to be activated on this object. As an example, "Control Alt"
   * will mark the control and alt modifiers as activated.
   */
  KeyboardEvent.prototype.initKeyboardEvent =
    function(type,canBubble,cancelable,view,keyIdentifier,keyLocation,modifiersList) {
      this.initUIEvent(type, canBubble, cancelable, view, 0);
      this.detail = undefined;
      this.keyIdentifier = keyIdentifier;
      this.keyLocation = keyLocation;
      this.ctrlKey = (modifiersList.indexOf('Control') >= 0);
      this.altKey = (modifiersList.indexOf('Alt') >= 0);
      this.shiftKey = (modifiersList.indexOf('Shift') >= 0);
      this.metaKey = null;
    };

  //DOM 3 Methods
  KeyboardEvent.prototype.getModifierState =
    function(keyIdentifier) {
  };
}
