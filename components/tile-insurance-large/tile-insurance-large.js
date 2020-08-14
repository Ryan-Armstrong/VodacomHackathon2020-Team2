Component({
  mixins: [],
  data: {},
  props: {
    onTap: e => {},
    srcPrimary: "",
    textPrimary: "",
    textSecondary: "",
    textTertiary: ""
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
