import './App.css';

function App() {
  return (
    <>
      <h1 className="title">Hello world</h1>

      <h2 className="song-title">
        Bài hát: Chân thành
      </h2>

      <div className="content">

        <div className="lyrics">
          {`Sẽ đến lúc ai cũng phải nhận ra rằng mình đã thay đổi
Đừng vì một người chẳng vì mình người chỉ biết đến bản thân
Một người quá đỗi vô tâm hoh oh uh oh
Người ấy có yêu em chân thành
Nếu khóc cứ chạy lại với anh
Gom hết nỗi đau này lên bờ vai để chữa lành (uh uh, hey)
Chân thành đổi lại gì đâu
Chỉ toàn phải chứng kiến thấy em đau anh đau ta đau
Sao cứ phải xa nhau xa nhau huh-uh
Anh cứ hy vọng rồi ôm về mình mớ thất vọng
Những gì đã từng hứa giờ đây cũng chỉ là lời bông đùa`}
        </div>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ZEW2vb-xPdBNl95nS0MdP-sWRrHXC5n-Op1tXA50pyV8jPU9Ed2_VupE&s=10"
          alt="Ảnh bài hát"
        />

      </div>

      <a
        className="link"
        href="https://www.youtube.com/watch?v=NHEst6ZzlMk"
      >
        Link youtube
      </a>
    </>
  );
}

export default App;