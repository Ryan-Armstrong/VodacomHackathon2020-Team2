Component({
  mixins: [],
  data: {},
  props: {
    onTap: e => {},
    srcPrimary: "",
    textMain: ""
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
