import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);
  
    export const ShowInfoAlert = () =>{
        MySwal.fire({
            icon: 'info',
            title: 'Sorry for the inconvenience!',
            text: 'Currently, Facing some issues, please use the Social Media Links, Mail or Phone Number - +91 8481823182 to connect..',
            // footer: '<a href> Why do i have this issue/',
        });
    };

    export const showSuccessAlert = () => {
        MySwal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Operation Completed Successfully.',
        });
    };

    export const showHireAlert = () => {
        MySwal.fire({

            icon: 'info',
            title: 'Sorry for the inconvenience!',
            text: 'Working on it, Please use the other options to contact.'
        });
    };

    export const showTouchAlert = () => {
        MySwal.fire({

            icon: 'info',
            title: 'Sorry for the inconvenience!',
            text: 'Working on it, We will be right back.'
        });
    };

    export const downloadCV = () =>{
        MySwal.fire({
            icon: 'error',
            title: 'Sorry for the inconvenience',
            text: 'Working on it! This functionality will be available soon.',
        });
    };

    export const customAlert = (props) =>{
        const capitalize = (word)=>{
            const lower = word.toLowerCase();
            return lower.charAt(0).toUpperCase()+lower.slice(1);
        }
      return (
        <div style={{height: '50px'}}>
          {props.alert && 
          <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
              <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
          </div>}
        </div>
      )
    };

