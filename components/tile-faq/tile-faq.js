Component({
  mixins: [],
  data: {},
  props: {
    onTap: e => {},
    textPrimary: "",
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
