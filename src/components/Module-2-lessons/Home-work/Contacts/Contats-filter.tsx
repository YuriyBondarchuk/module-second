import { Component } from "react";

interface ContatcsFilterProps {
    emitSearchUser: (value: string) => void;
}
 
interface ContatcsFilterState {
    
}
 
class ContatcsFilter extends Component<ContatcsFilterProps, ContatcsFilterState> {
    render() { 
        const { emitSearchUser }: ContatcsFilterProps = this.props;

        return (
            <div className="form-group">
                <input onChange={(e) => emitSearchUser(e.target.value)} className="form-control" type="text" placeholder="Search user" />
            </div>
        );
    }
}
 
export default ContatcsFilter;