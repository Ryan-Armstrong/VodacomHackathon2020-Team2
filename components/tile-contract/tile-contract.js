Component({
  mixins: [],
  data: {},
  props: {
    onTap: e => {},
    srcImage: "",
    phone: "",
    name: "",
    allocationA: "",
    allocationB: "",
    details: [],
    price: "",
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
