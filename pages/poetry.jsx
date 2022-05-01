import LandingTemplate from "../ui/templates/LandingTemplate"
import Post from "../ui/molecules/layout/Post";

const poem = {
    id: 'hjremdvoe87vjeb',
    title: 'New Poem',
    composition: [
        {
            id: 3,
            type: 'text',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor aliquam nulla facilisi cras fermentum odio. A scelerisque purus semper eget duis at. Nibh nisl condimentum id venenatis a. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Neque viverra justo nec ultrices dui sapien eget mi. Urna nec tincidunt praesent semper feugiat. Cursus vitae congue mauris rhoncus aenean vel. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Sed enim ut sem viverra aliquet eget. Nibh nisl condimentum id venenatis a. Euismod quis viverra nibh cras pulvinar mattis nunc. Sit amet tellus cras adipiscing enim. Velit sed ullamcorper morbi tincidunt ornare massa. Ut placerat orci nulla pellentesque dignissim enim sit. Vitae ultricies leo integer malesuada. \n Nec feugiat nisl pretium fusce id velit. Ultricies mi quis hendrerit dolor magna eget est lorem. Morbi blandit cursus risus at ultrices. Et sollicitudin ac orci phasellus egestas. Condimentum vitae sapien pellentesque habitant morbi. Dui id ornare arcu odio. Elit duis tristique sollicitudin nibh sit. Eros donec ac odio tempor orci dapibus. Nisl nisi scelerisque eu ultrices vitae auctor eu. Morbi tristique senectus et netus et malesuada. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Scelerisque varius morbi enim nunc faucibus a pellentesque. Nulla pellentesque dignissim enim sit amet venenatis urna. Platea dictumst vestibulum rhoncus est pellentesque. Amet est placerat in egestas erat imperdiet. \n  Amet dictum sit amet justo donec.Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed.Arcu odio ut sem nulla pharetra.A pellentesque sit amet porttitor.Integer feugiat scelerisque varius morbi enim nunc faucibus.Consequat id porta nibh venenatis cras sed felis eget velit.Netus et malesuada fames ac turpis egestas integer eget aliquet.Risus feugiat in ante metus dictum at tempor commodo ullamcorper.Blandit libero volutpat sed cras ornare.Tristique senectus et netus et malesuada fames ac turpis egestas.Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed.Tristique et egestas quis ipsum.Ac odio tempor orci dapibus ultrices.In egestas erat imperdiet sed euismod.\n Amet cursus sit amet dictum sit amet justo donec enim.Ultrices dui sapien eget mi proin sed libero enim.Gravida in fermentum et sollicitudin ac orci.Faucibus in ornare quam viverra orci sagittis eu volutpat odio.Sit amet justo donec enim diam vulputate ut.Lorem sed risus ultricies tristique nulla aliquet enim.Elementum tempus egestas sed sed.Pharetra massa massa ultricies mi.Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.Quis enim lobortis scelerisque fermentum dui.Enim nec dui nunc mattis enim.Sed elementum tempus egestas sed sed risus.Tincidunt lobortis feugiat vivamus at.Enim nulla aliquet porttitor lacus luctus accumsan tortor.Nibh sed pulvinar proin gravida hendrerit lectus.Viverra nibh cras pulvinar mattis.\n  Eros donec ac odio tempor orci.Magnis dis parturient montes nascetur ridiculus mus.Adipiscing at in tellus integer.Vitae semper quis lectus nulla at volutpat diam ut.Enim facilisis gravida neque convallis a.Sit amet purus gravida quis.Quam quisque id diam vel quam elementum pulvinar etiam non.Urna cursus eget nunc scelerisque viverra mauris in.Ridiculus mus mauris vitae ultricies leo integer malesuada nunc.Eu volutpat odio facilisis mauris sit amet.Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel.At tellus at urna condimentum mattis.Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.Nulla aliquet enim tortor at.Mauris in aliquam sem fringilla ut.'
        },
        {
            id: 1,
            type: 'title',
            body: 'New Post'
        }
    ]
}


const Poetry = () => {


    return (
        <LandingTemplate>
            <Post
                title={poem.title}
                composition={poem.composition}
            />
        </LandingTemplate>
    );
};

export default Poetry;
