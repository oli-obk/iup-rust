initSidebarItems({"enum":[["MouseButton","Mouse buttons."],["MouseButtonState","Specifies what happened to the mouse button in the `ButtonCb`."]],"trait":[["ButtonCb","/// Action generated when a mouse button is pressed or released. /// /// The `Button` parameter identifies the activated mouse button that triggered the action. /// /// The `i32` parameters are the x,y position in the canvas where the event has occurred, /// in pixels. /// /// The `KeyStates` parameter is the state of the mouse buttons and some keyboard keys at /// /// `CallbackReturn::Close` will be processed. On some controls if `CallbackReturn::Ignore` /// is returned the action is ignored *(this is system dependent)*. /// /// This callback can be used to customize a button behavior. For a standard button behavior /// use the `Action` callback. /// /// Learn more."],["MotionCb","/// Action generated when the mouse moves. /// /// The `i32` parameters are the x,y position in the canvas where the event has occurred, /// in pixels. /// /// The `KeyStates` parameter is the state of the mouse buttons and some keyboard keys at"]],"struct":[["KeyStates","The state of mouse buttons and some keyboard buttons."]]});