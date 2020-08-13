Component({
  mixins: [],
  data: {},
  props: {
    onTap: e => {},
    srcPrimary: "",
    textPrimary: "",
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
