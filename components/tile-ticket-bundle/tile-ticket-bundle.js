Component({
  mixins: [],
  data: {},
  props: {
    onTap: e => {},
    textPrimary: "",
    textSecondary: "",
    textInfo: "",
    textDiscount: "",
    textDescription: "",
    index: ""
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onTap(e) {
      this.props.onTap(e);
    }
  }
});
