Component({
  mixins: [],
  data: {},
  props: {
    onTap: e => {},
    srcPrimary: "",
    textPrimary: "",
    textSecondary: "",
    textInfo: "",
    textAmount: "",
    isSelected: false
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
