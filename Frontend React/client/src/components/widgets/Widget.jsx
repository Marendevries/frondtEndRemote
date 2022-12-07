import "./widget.scss"
import CircleIcon from '@mui/icons-material/Circle';
import RouterIcon from '@mui/icons-material/Router';
import BarChartIcon from '@mui/icons-material/BarChart';

export const Widget = ({ type }) => {

    let data;

    switch(type){
        case "online":
            data={title: "Online",
                    counter: "834",
                    icon: (<CircleIcon className="icon online"/>)
        };
        break;

        case "offline":
            data={title: "Offline",
                    counter: "68",
                    icon: (<CircleIcon className="icon offline"/>)
        };
        break;

        case "routers":
            data={title: "Routers",
                    counter: "834.642",
                    icon: (<RouterIcon className="icon"/>)
        };
        break;

        case "grafiek":
            data={title: "Grafiek",
                    counter: "4",
                    icon: (<BarChartIcon className="icon"/>)
        };
        break;

        default: break;
    }
  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.counter}</span>
        </div>
        <div className="right">
        {data.icon}
        
        </div>
    </div>
  )
}

export default Widget