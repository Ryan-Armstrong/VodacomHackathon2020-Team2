Component({
  mixins: [],
  data: {},
  props: {
    onTap: event =>{},
    textPrimary: ""
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onTap(event){
      this.props.onTap(event);
    }
  },
});
