Component({
  mixins: [],
  data: {},
  props: {
    onTap: e => {},
    srcPrimary: "",
    srcSecondary: "",
    textPrimary: "",
    textSecondary: ""
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
