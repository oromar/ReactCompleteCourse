'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.state = {
      title: 'Indecision App',
      subtitle: 'Put your life in the hands of a computer',
      options: ['One', 'Two']
    };

    _this.makeDecision = _this.makeDecision.bind(_this);
    _this.addOption = _this.addOption.bind(_this);
    _this.removeAll = _this.removeAll.bind(_this);
    _this.removeOption = _this.removeOption.bind(_this);
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'makeDecision',
    value: function makeDecision() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[randomNum]);
    }
  }, {
    key: 'addOption',
    value: function addOption(option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.includes(option)) {
        return 'Item already exists';
      } else {
        this.setState(function (prevState) {
          return {
            options: prevState.options.concat(option)
          };
        });
      }
    }
  }, {
    key: 'removeOption',
    value: function removeOption(evt) {
      var options = this.state.options;
      var updated = options.filter(function (opt) {
        return opt !== evt.target.id;
      });
      this.setState({ options: updated });
    }
  }, {
    key: 'removeAll',
    value: function removeAll() {
      this.setState({ options: [] });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: this.state.title, subtitle: this.state.subtitle }),
        React.createElement(
          Action,
          {
            disabled: this.state.options.length === 0,
            onClick: this.makeDecision
          },
          'What Should Id Do?'
        ),
        React.createElement(Options, {
          onOptionRemove: this.removeOption,
          onClick: this.removeAll,
          options: this.state.options
        }),
        React.createElement(AddOption, { addOption: this.addOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          subtitle = _props.subtitle;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          title
        ),
        React.createElement(
          'p',
          null,
          subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          onClick = _props2.onClick,
          children = _props2.children,
          disabled = _props2.disabled;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { disabled: disabled, onClick: onClick },
          children
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          options = _props3.options,
          onClick = _props3.onClick,
          onOptionRemove = _props3.onOptionRemove;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          null,
          React.createElement(
            'h3',
            null,
            'Your Options'
          ),
          React.createElement(
            'button',
            { onClick: onClick },
            'Remove All'
          )
        ),
        React.createElement(
          'ul',
          null,
          options.map(function (opt, i) {
            return React.createElement(
              Option,
              { onClick: onOptionRemove, key: i },
              opt
            );
          })
        )
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          children = _props4.children,
          onClick = _props4.onClick;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'li',
          { key: children },
          children,
          React.createElement(
            'button',
            {
              id: children,
              key: children,
              onClick: onClick,
              style: { border: 'none', background: 'none' }
            },
            'Remove'
          )
        )
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this6.addOption = _this6.addOption.bind(_this6);
    _this6.state = {
      error: undefined
    };
    return _this6;
  }

  _createClass(AddOption, [{
    key: 'addOption',
    value: function addOption(evt) {
      this.setState({ error: undefined });
      evt.preventDefault();
      var option = evt.target.elements.option.value.trim();
      var error = this.props.addOption(option);
      if (error) {
        this.setState({ error: error });
      }
      evt.target.elements.option.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { onSubmit: this.addOption },
          React.createElement(
            'p',
            null,
            this.state.error || ''
          ),
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            { id: 'btn-add-option' },
            'Add'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var app = document.getElementById('app');

ReactDOM.render(React.createElement(IndecisionApp, null), app);
